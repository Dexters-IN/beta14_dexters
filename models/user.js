const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    field: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    sno: {
        type: String
    },
    quantity: {
        type: Number
    }
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);