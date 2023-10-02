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
    adress: {
        type:String,
        
    },
    addedUser: {
        type: mongoose.Schema.ObjectId,
        ref:"user"
    },
    guardian: {
        type: mongoose.Schema.ObjectId,
        ref:"Guardian"
    },
})
