import express from "express"
import { graphqlHTTP as expressGraphQL } from "express-graphql"
import { GraphQLSchema } from 'graphql'
import { RootQueryType, RootMutationType } from "./models/index.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
console.log(process.env.PORT, PORT)
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.get('/', (_, res) => res.send('<h2 style="margin:10;font-family:roboto,sans-serif;font-weight:normal"> Hello to Learning GraphQL</h2>'))
app.use('/graphql', expressGraphQL({ schema, graphiql: true }))
app.listen(PORT, () => console.log("Server Running"))
