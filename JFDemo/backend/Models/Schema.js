const mongoose = require("mongoose")

const JournalTestSchema = new mongoose.Schema({
    date:{
        type:Date,
        default: new Date()
    },
    content:{
        type:String,
        required:true,
        minlength:10
    }
})

module.exports = mongoose.model("Journaltest",JournalTestSchema)