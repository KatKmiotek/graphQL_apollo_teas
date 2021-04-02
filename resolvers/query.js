module.exports = {
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
}