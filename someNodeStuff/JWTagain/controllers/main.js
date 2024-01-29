const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")

const signUp = async (req,res) => {
    const {username,password} = req.body
    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(password,salt)
    const data = await userModel.create({username,password:newPassword});
    if(data){
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
        res.status(200).json({Status:"Success",token:token,data:data});
    }
}

const login = async (req,res) => {
    const {username,password} = req.body
    const user = await userModel.findOne({username})
    if(user){
        const passwordValid = bcrypt.compare(password,user.password)//await user.comparePassword(password)
        if(passwordValid){
            const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
            res.status(200).json({Status:"Success",token:token});
        }
    }
}

const dashboard = (req,res) => {
    res.status(200).json(req.user)
}

module.exports = {signUp,login,dashboard}