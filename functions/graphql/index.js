const {ApolloServer, ApolloError} = require('apollo-server-lambda');
const mongoose = require('mongoose')
// const express = require('express')
// const { createServer } = require('http')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')


// const app = express()
const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    playground: true,
    introspection: true,
    debug: false
})

const createHandler = async () => {
 await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.s5jz7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
 return server.createHandler()
}

exports.graphqlHandler = (event, context, callback) => {
    createHandler().then(handler => handler(event, context, callback))
}
