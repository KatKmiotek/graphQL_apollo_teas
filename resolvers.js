const { Producer, Tea} = require('./model')
const pubsub = require('./pubsub')
const _ = require('lodash')

const resolvers = {
    Query: {
        teas: async (parent, args, context, info) => {
            return Tea.find()
                .then (tea => {
                    return _.filter(tea, args)
                })
                .catch (err => {
                    console.error(err)
                })
        },
        teaById: async (parent, args, context, info) => {
            return Tea.findOne({ _id: args.id })
                .then (tea => {
                    console.log(tea);
                    return { ...tea._doc }
                })
                .catch (err => {
                    console.error(err)
                })
        },
        producers (parent, args, context, info) {
            return Producer.find()
                .then (producer => {
                    return _.filter(producer, args)
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
        addProducer: async (
            _, { producerInput: { name, location } }
          ) => {
            const newProducer = new Producer({
              name,
              location
            });
            await newProducer.save();
            return newProducer;
          },
          addTea: async (
            _, { teaInput: { name, description, price, producerId } }
          ) => {
            const newTea = new Tea({
              name,
              description,
              price,
            });
            await newTea.save();
            const producer = await Producer.findById(producerId)
            producer.teas.push(newTea)
            producer.save();
            return newTea, producer;
          },
        updateTea: async ( parent, {id, args}) => {
            console.log(args);
            const tea = await Tea.findByIdAndUpdate(
                {
                    _id: id
                },
                {
                    $set: {
                        name: args.name,
                        description: args.description,
                        price: args.price
                    }
                },
                {
                   new: true 
                }
            )
            console.log(tea);
            return tea
        },
        deleteTea: async (parent, {id}) => {
            const removedTea = await Tea.findByIdAndRemove(id).exec()
            if(!removedTea){
                console.log("There was a probnlem with deleting this tea");
            }
            return removedTea
        }
    },
    
}

module.exports = resolvers
