const mongoose = require("mongoose")

const appSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    description:{
        type:String,
    },
    company:{
        type:String,
        required:true,
        minlength:3
    },
    createdBy:{
        
    }
})