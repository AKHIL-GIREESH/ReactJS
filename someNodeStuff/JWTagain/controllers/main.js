const jwt = require("jsonwebtoken")

const login = (req,res) => {
    const {username} = req.body
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({Status:"Success",token:token});
}

const dashboard = (req,res) => {
    res.status(200).json(req.user)
}

module.exports = {login,dashboard}