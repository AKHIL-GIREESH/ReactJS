const express = require("express")
const app = express()
require("dotenv").config()
const dbConnect = require("./db/dbConnect")
const ProductRouter = require("./routes/Products")


app.get("/",(req,res) => res.status(200).send("<h1>HomePage</h1>"))
app.use(express.json())
app.use("/api/v1/products",ProductRouter)


const commense = () => {
    dbConnect(process.env.DBCONNECT)
    .then(() => app.listen(process.env.PORT || 3001,() => console.log("Server is Up!")))
    .catch(err => console.log(err))
}

commense()