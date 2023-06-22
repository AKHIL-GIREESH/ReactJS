const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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

UserSchema.pre("save",async function(next){
    try{
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    }catch(err){
        console.log(err)
    }
})

module.exports = mongoose.model("User",UserSchema)