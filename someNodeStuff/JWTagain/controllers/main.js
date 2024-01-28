const login = (req,res) => {
    const {username,password} = req.body
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).send("Login");
}

const dashboard = (req,res) => {
    res.status(200).send("Dashboard")
}

module.exports = {login,dashboard}