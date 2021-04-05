const {ApolloServer, ApolloError} = require('apollo-server-express');
const mongoose = require('mongoose')
const express = require('express')
const { createServer } = require('http')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')


const app = express()
const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    playground: {
        endpoint: 'http://localhost:3000/graphql'
    },
    debug: false,
    formatError: (err) => {
        if(err.extensions.code == "INTERNAL_SERVER_ERROR"){
            return new ApolloError("This is nicer message than to show you 500", "ERROR")
        }
        return err
    }
})
server.applyMiddleware({app})
const httpServer = createServer(app)
server.installSubscriptionHandlers(httpServer)

mongoose
.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster0.s5jz7.mongodb.net/m${process.env.mongoDatabase}?retryWrites=true&w=majority`)
.then( (res) => {
    httpServer.listen(3000, () => {
        console.log('connected! on server http://localhost:3000/graphql')
    })
})
.catch( (err) => {
    console.error('Error while connecting to MongoDB', err);
})