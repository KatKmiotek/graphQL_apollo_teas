const teas = require('../data/teas.json')
const producers = require('../data/producers')

const {DataSource } = require('apollo-datasource')
const _ = require('lodash')
const { random } = require('lodash')

class TeaAPI extends DataSource{
    constructor(){
        super()
    }
    initialize(config){

    }

    getTeas(args){
        return _.filter(teas, args)
    }
    getTeaById(id){
        const tea = _.filter(teas, {id: parseInt(id)})
        return tea[0]
    }
    addToFavourites(id){
        const tea = _.filter(teas, {id: parseInt(id)})
        tea[0].favourite = !tea[0].favourite
        return tea[0]
    }
    addTea(tea){
        tea.id = Math.floor((Math.random() * 100) + 1)
        tea.favourite = false
        teas.push(tea)
        return tea
    }
    getProducers(args){
        return _.filter(producers, args)
    }
    getProducerById(id){
        const producer = _.filter(producers, {id: parseInt(id)})
        return producer[0]
    }
}
module.exports = TeaAPI;