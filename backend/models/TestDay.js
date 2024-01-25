const mongoose = require("mongoose")

const testDaySchema =  new mongoose.Schema({
    date: {type: String, required: true},
    tests: {type: Array},
    suspiciousUsers: {type: Array}
})

module.exports = mongoose.model("TestDay", testDaySchema);
