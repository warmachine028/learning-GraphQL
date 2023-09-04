import { graphqlHTTP as expressGraphQL } from "express-graphql"
import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { GraphQLSchema } from 'graphql'
import { RootQueryType, RootMutationType } from "./models/index.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/graphql', expressGraphQL({ schema, graphiql: true }))

app.get('/', (_, res) => res.send('<h2 style="margin:10;font-family:roboto,sans-serif;font-weight:normal"> Hello to Learning GraphQL</h2>'))
app.listen(PORT, () => console.log("Server Running"))
