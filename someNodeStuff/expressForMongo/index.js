const Express = require("express")
const express = Express()

express.get("/",(req,res) => {
    res.status(200).send("<h1>HomePage</h1>")
})

express.get("/books",(req,res) => {
    res.status(200).json({message:"Intro into MongoDB"})
})


express.listen(3000,() => console.log("Server is Up and Running"))