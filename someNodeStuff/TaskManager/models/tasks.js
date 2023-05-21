const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
        minlength:3
    },
    condition:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Task",TaskSchema)