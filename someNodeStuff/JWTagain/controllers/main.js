const jwt = require("jsonwebtoken")

const signUp = (req,res) => {
    const {username,password} = req.body
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({Status:"Success",token:token});
}

const login = (req,res) => {
    
}

const dashboard = (req,res) => {
    res.status(200).json(req.user)
}

module.exports = {signUp,login,dashboard}