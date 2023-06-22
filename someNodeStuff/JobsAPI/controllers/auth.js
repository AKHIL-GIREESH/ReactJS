const User = require("../models/UserSchema")
const jwt = require("jsonwebtoken")

const login = async (req,res) => {
    try{
        const {email} = req.body
        const user = await User.findOne({
            email
        })
        //const isPasswordCorrect = await user.comparePassword(password)
        const token = user.createJWT()
        res.status(200).json({ user: { name: user.name }, token })

    }catch(err){
        res.status(200).json({"message":err})
    }
}

const signUp = async (req,res) => {
    try{
        const user = await User.create(req.body)
        const token = await user.createJWT()
        res.status(200).json({"data":user,"Token":token})
    }catch(err){
        res.status(400).json({err})
    }
}

module.exports = {login,signUp}