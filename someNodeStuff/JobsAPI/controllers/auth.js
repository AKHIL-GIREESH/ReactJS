const User = require("../models/UserSchema")
const bcrypt = require("bcrypt")

const login = (req,res) => {
    res.status(200).json({"message":"login"})
}

const signUp = async (req,res) => {
    try{
        const {password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const signUp = await User.create({...req.body,password:hashedPassword})
        res.status(200).json({"data":signUp})
    }catch(err){
        res.status(400).json({err})
    }
}

module.exports = {login,signUp}