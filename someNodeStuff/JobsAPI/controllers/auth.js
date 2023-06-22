const User = require("../models/UserSchema")
const bcrypt = require("bcrypt")

const login = (req,res) => {
    res.status(200).json({"message":"login"})
}

const signUp = async (req,res) => {
    try{
        const signUp = await User.create(req.body)
        res.status(200).json({"data":signUp})
    }catch(err){
        res.status(400).json({err})
    }
}

module.exports = {login,signUp}