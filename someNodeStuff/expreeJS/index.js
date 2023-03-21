const express = require("express")()
const {products, people} = require("./data") 
// const logger = require("./logger")
// const authorize = require("./authorize")
const morgan = require("morgan")

express.use(morgan("tiny"))

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

express.post("/api/postman/people",(req,res) => {
    const {name,id} = req.body
    if(!name || !id){
        return res.status(401).json({success:false,msg:"Provide Credentials"})
    }
    res.status(200).json({success:true,msg:[...people,{id:id, name:name}]})
})

express.all("*",(req,res) => {
    res.status(404).send("<h2>Page Not Found</h2>")
})


express.listen(3000,() => console.log("Server is Up and Running"))