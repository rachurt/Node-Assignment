const mongoose = require('mongoose')

const StudentProfile = new mongoose.Schema({
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
    past_course:{
        type:String
    }
})

module.exports = mongoose.model('student-profile', StudentProfile)