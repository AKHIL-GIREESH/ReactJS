const express = require("express")
require("dotenv").config()
const dbConnect = require("./DB/dbConnect")
const mainRouter = require("./routes/main")
const appRouter = require("./routes/appRpute")
const authentication = require("./middleware/authentication")
const app = express()

app.use(express.json())
app.use("/api/v1",mainRouter)
app.use("/api/v1/app",authentication,appRouter)


app.get("/",(req,res) => {
    res.status(200).send("<h1>HOME</h1>");
})



//app.listen(process.env.PORT,() => console.log("Server is up and running"))
const server = () => {
    dbConnect(process.env.MONGOURL)
    .then(() => app.listen(process.env.PORT,() => console.log("Server is up and running")))
    .catch((err) => console.log(err))
}

server()