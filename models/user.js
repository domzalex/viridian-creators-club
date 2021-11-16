const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);