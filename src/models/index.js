import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import BookType from './book.js'
import AuthorType from './author.js'
import { authors, books } from '../db/index.js'


export const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: "List of all books",
            resolve: () => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: "List of all authors",
            resolve: () => authors
        },
        book: {
            type: BookType,
            description: "A specific book",
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (_, args) => books.find(book => book.id === args.id)
        },
        author: {
            type: AuthorType,
            description: "A specific author",
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (_, args) => authors.find(author => author.id === args.id)
        }
    })
})

export const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutaion",
    fields: () => ({
        addBook: {
            type: BookType,
            description: "Add a Book",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: (_, args) => {
                const book = {
                    id: books.length + 1,
                    name: args.name,
                    authorId: args.authorId
                }
                books.push(book)
                return book
            }
        },
        addAuthor: {
            type: AuthorType,
            description: "Add an Author",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const author = {
                    id: authors.length + 1,
                    name: args.name,
                }
                authors.push(author)
                return author
            }
        },
        updateBook: {
            type: BookType,
            description: "Update a Book",
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLString },
                authorId: { type: GraphQLInt }
            },
            resolve: (_, args) => {
                const index = books.findIndex(book => book.id === args.id)
                if (index === -1)
                    throw new Error(`Book with id: ${args.id} not found`)
                const book = { ...books[index], ...args }
                books[index] = book
                return book
            }
        },
        updateAuthor: {
            type: AuthorType,
            description: "Update an Author",
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const index = authors.findIndex(author => author.id === args.id)
                if (index === -1)
                    throw new Error(`Author not found with id: ${args.id}`)
                const author = { ...authors[index], ...args }
                authors[index] = author
                return author
            }
        }
    })
})
