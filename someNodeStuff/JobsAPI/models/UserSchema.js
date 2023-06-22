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

UserSchema.pre("save",async function(next){
    const {password} = this.req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password,salt)
})

module.exports = mongoose.model("User",UserSchema)