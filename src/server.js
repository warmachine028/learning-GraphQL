import express from "express"
import { graphqlHTTP as expressGraphQL } from "express-graphql"
import { GraphQLSchema } from 'graphql'
import { RootQueryType, RootMutationType } from "./models/index.js"

const app = express()

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})


app.use('/graphql', expressGraphQL({ schema, graphiql: true }))
app.listen(5000, () => console.log("Server Running"))
