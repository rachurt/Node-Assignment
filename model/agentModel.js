const mongoose = require('mongoose')

const UserProfile = new mongoose.Schema({
    name:{
        type:String
    },
    place:{
        type:String
    },
    mobile_number:{
        type:Number
    },
    email:{
        type:String
    },
    bank_detail:{
        type:String
    }
})

module.exports = mongoose.model('agent-profile', UserProfile)