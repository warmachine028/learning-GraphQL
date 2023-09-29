const path = require('path')
const { fileURLToPath } = require('url')
const { join } = require("node:path")
const { loadSchemaSync } = require("@graphql-tools/load")
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader")
const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const db = require("./db/index.js")


const typeDefs = loadSchemaSync(join(path.dirname(''), 'schemas.graphql'), { loaders: [new GraphQLFileLoader()] })

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id !== parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(review => review.author_id !== parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter(game => game.id !== args.id)
            return db.games
        },
        addGame(_, args) {
            const game = {
                ...args.game,
                id: `${Math.floor(Math.random() * 10000)}`
            }
            db.games.push(game)
            return game
        },
        updateGame(_, args) {
            db.games = db.games.map(game => game.id === args.id ? { ...game, ...args.edits } : game)
            return db.games.find(game => game.id === args.id)
        }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs, // -- definitions of types of data [Map/Schema]
    resolvers // -- 
})
const PORT = 5000
const { url } = startStandaloneServer(server, {
    listen: { port: PORT }
})


console.log('Server Running')
