const tasks = require('./routes/tasks')
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const ErrorPage = require("./middlewares/404")
const errorHandler = require("./middlewares/errorHandler")
require("dotenv").config()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home</h1>")
})

app.use('/api/v1/tasks', tasks)
app.use(ErrorPage)
app.use(errorHandler)

const commense = () => {
    connectDB(process.env.DBCONNECT)
    .then(() => app.listen(process.env.PORT || 3001,() => console.log("Server is Running")))
    .catch(err => console.log(err))
}

commense()