const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    surname: {
        type:String,
        required:true
    },
    studentNo: {
        type:Number,
        required:true
    },
    adress: {
        type:String,
    },
    class: {
        type: mongoose.Schema.ObjectId,
        ref:"Class"
    },
    addedUser: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    guardian: {
        type: mongoose.Schema.ObjectId,
        ref:"Guardian"
    },
})
