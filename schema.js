const {gql} = require('apollo-server')

module.exports =
gql `
type Query {
    teas(
    id: ID
    name: String
    description: String
    price: Float
    producerId: String
    ): [Tea!]!,
    teaById(id: ID): Tea
    producers(
    id: ID
    name: String
    location: String
    teas: [teaInput]
    ): [Producer],
    producerById(id: ID): Producer
}
type Mutation {
    addTea(teaInput: teaInput): Tea
    addProducer(producerInput: producerInput): Producer
    updateTea(teaUpdate: teaUpdate): Tea
}
type Producer{
    id: ID!
    name: String!
    location: String!
    teas: [Tea]
}
type Tea {
    id: ID!
    name: String!
    description: String!
    price: Float!
}
input producerInput {
    name: String!
    location: String!
    teas: [teaInput]
}
input teaInput {
    producerId: String!
    name: String!
    description: String!
    price: Float!
}
input teaUpdate {
    id: ID!
    name: String
    description: String
    price: Float
}
`