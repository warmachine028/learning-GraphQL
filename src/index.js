import express from "express"
import { GraphQLSchema } from 'graphql'
import { RootQueryType, RootMutationType } from "./models/index.js"
import { createHandler } from "graphql-http/lib/use/express"

const app = express()
const PORT = 5000
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', createHandler({ schema }))
app.get('/', (_, res) => res.send("<h2 style='margin:10; font-family:roboto,sans-serif; font-weight:normal;'>Hello to Learning GraphQL</h2>"))
app.listen(PORT, () => console.log("Server Running"))
