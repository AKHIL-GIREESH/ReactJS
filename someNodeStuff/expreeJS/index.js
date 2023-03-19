const express = require("express")()

express.get("/",(req,res) => {
    res.status(200).send("<h1>WelcomePage</h1>")
})

express.get("/Home",(req,res) => {
    res.status(200).send("<h2>HomePage</h2>")
})

express.all("*",(req,res) => {
    res.status(404).send("<h2>Page Not Found</h2>")
})


express.listen(3000,() => console.log("Server is Up and Running"))