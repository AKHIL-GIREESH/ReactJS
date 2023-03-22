const Express = require("express")
const express = Express()
const {products, people} = require("./data") 
// const logger = require("./logger")
// const authorize = require("./authorize")
const morgan = require("morgan")

express.use(morgan("tiny"))

express.use(Express.urlencoded({extended:false}))

express.use(Express.json())

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

express.put("/products/:ProductID",(req,res) => {
    const productAvailability = products.find(product => product.id === Number(req.params))
    if(!productAvailability){

    }
    if(!req.body){

    }
    res.status(200).json(products.map(product => {
        if (product.id === Number(req.params)){
            
        }
    }))
})

express.post("/people",(req,res) => {
    const {name,id} = req.body
    if(!name || !id){
        return res.status(401).json({success:false,msg:"Provide Credentials"})
    }
    res.status(200).json({success:true,msg:[...people,{id:id,name:name}]})
})



express.all("*",(req,res) => {
    res.status(404).send("<h2>Page Not Found</h2>")
})


express.listen(3000,() => console.log("Server is Up and Running"))