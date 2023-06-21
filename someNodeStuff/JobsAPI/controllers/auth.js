const User = require("../models/UserSchema")

const login = (req,res) => {

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