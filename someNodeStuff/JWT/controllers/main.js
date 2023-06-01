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
        res.status(200).send(`<h1>Welcome Back ${req.headers.loggedUser.username} </h1>`)
}

module.exports = {Login,DashBoard}