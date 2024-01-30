const jwt = require("jsonwebtoken")

const authentication = async (req,res,next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]
    console.log("Point 1")
    try{
        const user = await jwt.verify(token,process.env.JWT_SECRET)
        req.user = user
    }catch(err){
        console.log(err)
    }
    next()
}

module.exports = authentication