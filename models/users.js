const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name : {type : String, require : true},

    lastname : {type : String, require : false},

    email : {type : String, require : true},

    password : {type : String, require : true},
})

module.exports = mongoose.model('user', userSchema)