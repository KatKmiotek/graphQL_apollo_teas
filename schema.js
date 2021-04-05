const {gql} = require('apollo-server')

module.exports =
gql `
type Query {
    teas(
    id: String
    name: String
    description: String
    price: Float
    ): [Tea],
    teaById(id: String): Tea
    producers(
    id: String
    name: String
    location: String
    ): [Producer],
    producerById(id: String): Producer
}
type Mutation {
    addTea(name: String, description: String, price: Float): Tea
    addProducer(name: String, location: String): Producer
}
type Producer{
    _id: String!
    name: String!
    location: String
}
type Tea {
    _id: String!
    name: String!
    description: String
    price: Float
    producer: [Producer]
}
input producerInput {
    name: String!
    location: String
}
`