const mongoose = require('mongoose')
const { Schema } = mongoose


const TeaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    producerId: {
        type: String
    }
})
const ProducerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    teas: [TeaSchema]
})






const Producer = mongoose.model('Producer', ProducerSchema)
const Tea = mongoose.model('Tea', TeaSchema)

module.exports = {
    Producer,
    Tea
}