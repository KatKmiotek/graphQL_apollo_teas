const {gql} = require('apollo-server')

module.exports =
gql `
type Query {
    teas(
    id: ID
    name: String
    description: String
    ): [Tea],
    teaById(id: ID): Tea
}
type Tea {
    id: ID!
    name: String!,
    description: String
}`