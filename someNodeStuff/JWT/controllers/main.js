const jwt = require("jsonwebtoken")

const Login = async (req,res) => {
    const {username,password} = req.body
    if(!(username && password)){
        res.send("Error")
    }

    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
    
    res.status(200).json({ msg: 'user created', token })
}
const DashBoard = async (req,res) => {
    try{
        const {authorization} = req.headers
        if(!(authorization.startsWith("Bearer"))){
            res.send("No token Provided")
        }
        const verification = jwt.verify(authorization.split(" ")[1],process.env.JWT_SECRET)
        res.status(200).send(`<h1>Welcome Back ${verification.username} </h1>`)
    }catch(err){
        res.status(500).send("Something Went Wrong!")
    }
}

module.exports = {Login,DashBoard}