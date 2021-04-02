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
type Mutation {
    addToFavourites(id: ID): Tea,
    addNewTea(tea: teaInput): Tea
}
type Producer{
    id: ID!
    name: String!
    location: String
    teas: [Tea]
}
input teaInput {
    name: String!
    description: String
    price: Int
    favourite: Boolean
}
type Tea {
    id: ID!
    name: String!
    description: String
    price: Int
    favourite: Boolean
    producer: Producer
}`