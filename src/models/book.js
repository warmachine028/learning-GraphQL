import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql'

import { authors } from "../db/index.js"
import AuthorType from './author.js'

export const BookType = new GraphQLObjectType({
    name: "Book",
    description: "This represents a book written by author",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => authors.find(author => author.id === book.authorId)
        }
    })
})

export default BookType