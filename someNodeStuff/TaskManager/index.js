const tasks = require('./routes/tasks')
const express = require("express")
const app = express()

// app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home</h1>")
})

app.use('/api/v1/tasks', tasks)

app.listen(3001,() => console.log("Server is Running"))