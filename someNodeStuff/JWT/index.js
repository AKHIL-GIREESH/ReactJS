const express = require("express")
const app = express()
const dbConnect = require("./db/connect")
require("dotenv").config()
const router = require("./routes/main")

app.use(express.json());
app.get("/",(req,res) => res.status(200).send("<h1>HomePage</h1>"));
app.use("/api/v1",router);


(() => {
    dbConnect(process.env.DBCONNECT)
    .then(() => app.listen(process.env.PORT, () => console.log("Server is running on port 3001")))
    .catch(err => console.log(err))
})()