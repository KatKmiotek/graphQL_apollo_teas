const teas = require('../data/teas.json')
const producers = require('../data/producers')

const {DataSource } = require('apollo-datasource')
const _ = require('lodash')

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
    getProducers(args){
        return _.filter(producers, args)
    }
    getProducerById(id){
        const producer = _.filter(producers, {id: parseInt(id)})
        return producer[0]
    }
}
module.exports = TeaAPI;