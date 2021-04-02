module.exports = {
    producer: (tea, args, {dataSources}) => {
        const producers = dataSources.ProducersAPI.getProducers()
        const returned = producers.find((producer) => {
            return tea.producer.id === producer.id
        })
        return returned;
    }
}