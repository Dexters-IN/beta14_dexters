const mongoose = require('mongoose')
const donarHistorySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    }

})

const DonarHistory = mongoose.model('History', donarHistorySchema);
module.exports = DonarHistory;