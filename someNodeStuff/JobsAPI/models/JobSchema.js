const mongoose = require("mongoose")

const Jobs = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Provide a Name"],
        minlength:1
    },
    company:{
        type:String,
        
    }

})