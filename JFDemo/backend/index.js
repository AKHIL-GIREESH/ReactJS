const express = require("express")
const app = express()

const authenticate = (req,res,next) => {
    let {name} = req.query
    if(name === "john"){
        next()
    }else{
        res.send("Unauthorized")
    }
}

app.use(authenticate)

app.get("/",(req,res) => {
    res.status(200).send("<h1>Hello</h1>")
})

app.all("*",(req,res) => {
    res.status(404).send("<h1>404</h1>")
})

app.listen(3000,() => console.log("Server is up and Running!"))