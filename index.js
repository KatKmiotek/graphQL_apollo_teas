const {ApolloServer, gql} = require('apollo-server');
const TeaAPI = require('./dataSources/dataSets')
const ProducersAPI = require('./dataSources/dataSets')

const typeDefs = require('./schema')

const resolvers = require('./resolvers')

const dataSources = ()=>({
    TeaAPI: new TeaAPI(),
    ProducersAPI: new ProducersAPI()
})
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
.listen({port: process.env.PORT || 4000})
.then(({ url })=> {
    console.log(`GraphQL is running at ${url}`)
})