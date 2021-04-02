const _ = require('lodash')

module.exports =
{
    Query: {
        teas: (parent, args, {dataSources}, info) => {
            return dataSources.TeaAPI.getTeas(args)
        },
        teaById: (parent, {id}, {dataSources}, info) => {
            return dataSources.TeaAPI.getTeaById(id)
        },
        producers: (parent, args, {dataSources}, info) => {
            return dataSources.ProducersAPI.getProducers(args)
        },
        producerById: (parent, {id}, {dataSources}, info)=> {
            return dataSources.ProducersAPI.getProducerById(id)
        }
    },
    Tea: {
        producer: (tea, args, {dataSources}) => {
            const producers = dataSources.ProducersAPI.getProducers()
            const returned = producers.find((producer) => {
                return tea.producer.id === producer.id
            })
            return returned;
        }
    }
}