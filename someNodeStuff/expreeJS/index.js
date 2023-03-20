const express = require("express")()
const {products} = require("./data") 

express.get("/",(req,res) => {
    res.status(200).send("<h1>WelcomePage</h1>")
})

express.get("/Home",(req,res) => {
    res.status(200).send("<h2>HomePage</h2>")
})

express.get("/products",(req,res) => {
    res.status(200).send(products)
})

express.get("/products/:ProductID",(req,res) => {
    res.status(200).json(products.find(product => product.id.toString() === req.params.ProductID ))
})

express.all("*",(req,res) => {
    res.status(404).send("<h2>Page Not Found</h2>")
})


express.listen(3000,() => console.log("Server is Up and Running"))