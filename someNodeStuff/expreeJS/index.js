const express = require("express")()

express.get('/',(req,res) => {
    res.status(200).send("Login")
})

express.get('/home',(req,res) => {
    res.status(200).send("Landing")
})

express.get('*',(req,res) => {
    res.status(404).send("Page Not Found")
})


express.listen(3000,() => console.log("Running in 3000"))