const _ = require('lodash')
const Query = require('./resolvers/query')
const Tea = require('./resolvers/tea')
const Mutation = require('./resolvers/mutation')

module.exports =
{
    Query,
    Tea,
    Mutation
}