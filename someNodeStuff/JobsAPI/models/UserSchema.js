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

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  })
  
  UserSchema.methods.createJWT = function () {
    return jwt.sign(
      { userId: this._id, name: this.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    )
  }
  
  UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
  }

module.exports = mongoose.model("User",UserSchema)