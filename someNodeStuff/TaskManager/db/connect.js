require('dotenv').config({ path: '../.env' })
const mongoose = require("mongoose")
//console.log(process.env.DBCONNECT)

mongoose
.connect(process.env.DBCONNECT)
.then(() => console.log("Connected"))
.catch(err => console.error(err))
