const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name : {type: String, required: [true, "Name is missing"]},

    lastname : {type: String, required: false},

    email : {type: String, required: [true, "Email is missing"]},

    password : {type: String, required: [true, "Password is missing"]}

})

module.exports = mongoose.model('user', userSchema)