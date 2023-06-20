const express = require("express")
const app = express()
const dbConnect = require("./db/dbConnect")
require("dotenv").config()


const start = () => {
    dbConnect(process.env.MONGOURL)
    .then(() => app.listen(process.env.PORT,() => console.log("Server is Up!")))
    .catch(err => console.log(err))
}

start()