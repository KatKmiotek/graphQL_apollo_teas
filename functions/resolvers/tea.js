const { ApolloError } = require("apollo-server");

module.exports = {
    producer: (tea, args, {dataSources}) => {
    try{
        const producers = dataSources.ProducersAPI.getProducers()
        const returned = producers.find((producer) => {
            return tea.producer.id === producer.id
        })
        return returned;
    }catch( error ){
        new ApolloError("cannot get producer")
    }
        
    }
}