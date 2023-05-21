const tasks = require('./routes/tasks')
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const ErrorPage = require("./middlewares/404")
const AsyncWrapper = require("./middlewares/asyncWrapper")
require("dotenv").config()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home</h1>")
})

app.use('/api/v1/tasks', tasks)
app.use(ErrorPage)


const commense = () => {
    connectDB(process.env.DBCONNECT)
    .then(() => app.listen(3001,() => console.log("Server is Running")))
    .catch(err => console.log(err))
}

commense()