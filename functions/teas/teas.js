const { ApolloServer, gql } = require('apollo-server-lambda')
const express = require('express')
const { createServer } = require('http')
const mongoose = require('mongoose')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})
const httpServer = createServer(app)

mongoose
.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.s5jz7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true })
// .then( (res) => {
//     httpServer.listen(8888, () => {
//         // console.log('connected! on server http://localhost:3000/graphql')
//     })
// })
// .catch( (err) => {
//     console.error('Error while connecting to MongoDB', err);
// })

const handler = server.createHandler()

module.exports = { handler }
