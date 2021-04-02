const teas = require('../data/teas.json')

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
}
module.exports = TeaAPI;