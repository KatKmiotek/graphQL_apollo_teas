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
  introspection: true,
  formatError: (err) => ({
    message: err.originalError.message || err.message,
    code: err.originalError.code || 500
  }),
})
const httpServer = createServer(app)

mongoose
.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.s5jz7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true })


const handler = server.createHandler()

module.exports = { handler }
