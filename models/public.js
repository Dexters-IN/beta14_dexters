const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PublicSchema = new Schema({
    landmark: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    informed: {
        type: String,
        required: true
    }
})

const General = mongoose.model('General', PublicSchema);
module.exports = General;