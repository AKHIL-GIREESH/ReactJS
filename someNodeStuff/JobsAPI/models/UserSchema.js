const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,"Provide the Username"],
        minlength:1
    },
    password:{
        type: String,
        required:[true,"Provide the Password"],
        minlength:1
    },
    email:{
        type: String,
        required:[true,"Provide the email"]
    }
})

module.exports = mongoose.model("User",UserSchema)