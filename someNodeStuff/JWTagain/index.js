const express = require("express")
require("dotenv").config()
const dbConnect = require("./DB/dbConnect")
const mainRouter = require("./routes/main")
const app = express()

app.use(express.json())
app.use("/api/v1",mainRouter)


app.get("/",(req,res) => {
    res.status(200).send("<h1>HOME</h1>");
})




const server = () => {
    dbConnect(process.env.MONGOURL)
    .then(() => app.listen(process.env.PORT,() => console.log("Server is up and running")))
    .catch(() => console.log("Something went wrong"))
}

server()