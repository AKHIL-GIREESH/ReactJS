const express = require("express")
const app = express()
require("dotenv").config()


app.get("/",(req,res) => res.status(200).send("<h1>HomePage</h1>"))
const commence = () => {
    app.listen(process.env.PORT || 3001,() => console.log("Server is Up!"))
}

commence()