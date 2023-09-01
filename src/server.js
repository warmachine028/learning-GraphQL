import express from "express"
import { graphqlHTTP as expressGraphQL } from "express-graphql"
import { GraphQLSchema } from 'graphql'
import { RootQueryType, RootMutationType } from "./models/index.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})


app.use('/graphql', expressGraphQL({ schema, graphiql: true }))
app.listen(PORT, () => console.log("Server Running"))
