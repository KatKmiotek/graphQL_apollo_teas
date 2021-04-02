const {ApolloServer, gql} = require('apollo-server');
const TeaAPI = require('./dataSources/teas')

const typeDefs = require('./schema')

const resolvers = require('./resolvers')

const dataSources = ()=>({
    TeaAPI: new TeaAPI()
})
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
.listen({port: process.env.PORT || 4000})
.then(({ url })=> {
    console.log(`GraphQL is running at ${url}`)
})