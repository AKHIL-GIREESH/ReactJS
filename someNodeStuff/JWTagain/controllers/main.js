const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")

const signUp = async (req,res) => {
    const {username,password} = req.body
    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(password,salt)
    const data = await userModel.create({username,newPassword});
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({Status:"Success",token:token});
}

const login = (req,res) => {
    
}

const dashboard = (req,res) => {
    res.status(200).json(req.user)
}

module.exports = {signUp,login,dashboard}