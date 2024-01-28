const jwt = require("jsonwebtoken")

const authentication = (req,res,next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]
    try{
        const user = jwt.verify(token,process.env.JWT_SECRET)
        req.user = user
    }catch(err){
        console.log(err)
    }
    next()
}

module.exports = authentication