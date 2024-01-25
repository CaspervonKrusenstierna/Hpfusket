const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    privilege: {type: Number, required: true, default: 0},
    password: {type: String, required: true},
    membershipLevel: {type: Number, required: false},
    loggedOutTokenIds: {type: Array, required: false, default: []},
    isBanned: {type:Boolean, required: true, default: false },
})

module.exports = mongoose.model("User", userSchema);