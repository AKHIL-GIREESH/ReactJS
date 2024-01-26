const express = require("express")
const app = express()
require("dotenv").config()
const DBConnect = require("./DB/connectDB")
const PageRouter = require("./Routes/page")

// const authenticate = (req,res,next) => {
//     let {name} = req.query
//     if(name === "john"){
//         next()
//     }else{
//         res.send("Unauthorized")
//     }
// }

// app.use(authenticate)
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home</h1>")
})

app.use('/api/v1/page', PageRouter)

// app.post("/post",(req,res) => {
//     const {name} = req.body
//     if(name === "john"){
//         res.status(200).send(`<h1>Hello ${name}</h1>`)
//     }else{
//         res.send("Something went wraaang")
//     }
// })

app.all("*",(req,res) => {
    res.status(404).send("<h1>404 Page not Found</h1>")
})

const start = () => {
    DBConnect(process.env.MONGO_URL)
    .then(app.listen(process.env.PORT,() => console.log("Server is up and Running!")))
    .catch((err) => console.log("Something went wrong : "+err))
}

start()