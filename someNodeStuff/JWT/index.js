const express = require("express")
const app = express()
const dbConnect = require("./db/connect")
require("dotenv").config()

app.get("/",(req,res) => res.status(200).send("Home"));

(function() {
    dbConnect(process.env.DBCONNECT)
    .then(() => app.listen(process.env.PORT, () => console.log("Server is running on port 3001")))
    .catch(err => console.log(err))
})()