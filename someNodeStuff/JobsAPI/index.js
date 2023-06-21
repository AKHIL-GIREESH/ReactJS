const express = require("express")
const app = express()
const dbConnect = require("./db/dbConnect")
require("dotenv").config()
const jobRouter = require("./routes/jobRoutes")
const authRouter = require("./routes/authRouter")

app.use(express.json())

app.use("/api/v1/auth",authRouter)
app.use("api/v1/jobs",jobRouter)


const start = () => {
    dbConnect(process.env.MONGOURL)
    .then(() => app.listen(process.env.PORT,() => console.log("Server is Up!")))
    .catch(err => console.log(err))
}

start()