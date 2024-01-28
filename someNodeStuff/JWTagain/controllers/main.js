const jwt = require("jsonwebtoken")

const login = (req,res) => {
    const {username,password} = req.body
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({Status:"Success",token:token});
}

const dashboard = (req,res) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]
    try{
        const user = jwt.verify(token,process.env.JWT_SECRET)
        res.status(200).json({user})
    }catch(err){
        console.log(err)
    }
}

module.exports = {login,dashboard}