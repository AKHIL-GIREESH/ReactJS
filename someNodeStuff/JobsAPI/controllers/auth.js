const User = require("../models/UserSchema")
const jwt = require("jsonwebtoken")

const login = (req,res) => {
    res.status(200).json({"message":"login"})
}

const signUp = async (req,res) => {
    try{
        const signUp = await User.create(req.body)
        const token = await jwt.sign({id:signUp._id,email:signUp.email},process.env.JWT_SECRET,{expiresIn:"30d"})
        res.status(200).json({"data":signUp,"Token":token})
    }catch(err){
        res.status(400).json({err})
    }
}

module.exports = {login,signUp}