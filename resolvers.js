const { Producer, Tea} = require('./model')
const pubsub = require('./pubsub')
const _ = require('lodash')

const resolvers = {
    Query: {
        teas (parent, args, context, info) {
            return Tea.find()
                .then (tea => {
                    return _.filter(tea, args)
                })
                .catch (err => {
                    console.error(err)
                })
        },
        teaById (parent, args, context, info) {
            return Tea.findOne({ _id: args.id })
                .then (tea => {
                    return { ...tea._doc }
                })
                .catch (err => {
                    console.error(err)
                })
        },
        producers (parent, args, context, info) {
            return Producer.find()
                .then (producer => {
                    return producer.map (producer => ({ ...producer._doc }))
                })
                .catch (err => {
                    console.error(err)
                })
        },
        producerById (parent, args, context, info) {
            return Producer.findOne({ _id: args.id })
                .then (producer => {
                    return { ...producer._doc }
                })
                .catch (err => {
                    console.error(err)
                })
        },
    },
    Mutation: {
        addTea (parent, args, context, info) {
            const { name, description, price } = args
            const teaObj = new Tea({
                name,
                description,
                price,
            })
            return teaObj.save()
                .then (result => {
                    return { ...result._doc }
                })
                .catch (err => {
                    console.error(err)
                })
        },
        addProducer (parent, args, context, info) {
            const { name, location } = args
            const producerObj = new Producer({
                name,
                location
            })
            return producerObj.save()
                .then (result => {
                    return { ...result._doc }
                })
                .catch (err => {
                    console.error(err)
                })
        },
    },
}

module.exports = resolvers
