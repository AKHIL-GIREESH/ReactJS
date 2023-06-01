const jwt = require("jsonwebtoken")

const authorization = (req,res) => {
    try{
        const {authorization} = req.headers
        if(!(authorization.startsWith("Bearer"))){
            res.send("No token Provided")
        }

        console.log(process.env.JWT_SECRET)
        const verification = jwt.verify(authorization.split(" ")[1],process.env.JWT_SECRET)
        console.log(verification)
        req.headers.loggedUser = verification
        console.log(req.headers.loggedUser)
        next()
    }catch(err){
        res.status(500).send("Something Went Wrong!")
    }
}

module.exports = authorization