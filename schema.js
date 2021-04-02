const {gql} = require('apollo-server')

module.exports =
gql `
type Query {
    teas(
    id: ID
    name: String
    description: String
    price: Int
    ): [Tea],
    teaById(id: ID): Tea
    producers(
    id: ID
    name: String
    location: String
    ): [Producer],
    producerById(id: ID): Producer
}
type Producer{
    id: ID!
    name: String!
    location: String
    teas: [Tea]
}
type Tea {
    id: ID!
    name: String!
    description: String
    price: Int
    producer: Producer
}`