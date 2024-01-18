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
app.use(express.json())

app.get("/",(req,res) => {
    res.status(200).send("<h1>Hello</h1>")
})

app.post("/post",(req,res) => {
    const {name} = req.body
    if(name === "john"){
        res.status(200).send(`<h1>Hello ${name}</h1>`)
    }else{
        res.send("Something went wraaang")
    }
})

app.all("*",(req,res) => {
    res.status(404).send("<h1>404</h1>")
})

app.listen(3000,() => console.log("Server is up and Running!"))