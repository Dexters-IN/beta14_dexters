const mongoose = require('mongoose')
const logSchema = new mongoose.Schema({
    field: {
        type: String,
    },
    donarID: {
        type: String,
        required: true
    },
    receiverID: {
        type: String,
        required: true
    }
})

const LogData = mongoose.model('Log', logSchema)
module.exports = LogData;