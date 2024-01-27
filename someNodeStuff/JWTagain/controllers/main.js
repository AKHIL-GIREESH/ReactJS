const login = (req,res) => {
    res.status(200).send("Login");
}

const dashboard = (req,res) => {
    res.status(200).send("Dashboard")
}

module.exports = {login,dashboard}