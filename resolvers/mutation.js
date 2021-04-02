module.exports = {
    addToFavourites:(parent, {id}, {dataSources}, info) => {
        return dataSources.TeaAPI.addToFavourites(id)
    },
    addNewTea: (parent, {tea}, {dataSources}, info) => {
        return dataSources.TeaAPI.addTea(tea)
    }
}