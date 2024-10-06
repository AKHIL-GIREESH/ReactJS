const express = require("express")
const app = express()
const {Server} = require("socket.io")
const {createServer} = require("http")
const cors = require("cors")
app.use(cors())


const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5174",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

io.on("connection",(socket) => {
    console.log("User Connected")
    console.log("ID",socket.id)
})

app.get("/",(req,res) => {
    res.status(200).send("Works!")
})

server.listen(3002,() => {
    console.log("Server is running...")
})