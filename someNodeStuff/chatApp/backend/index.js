// const express = require("express")
// const app = express()
// const {Server} = require("socket.io")
// const {createServer} = require("http")
// const cors = require("cors")
// app.use(cors())


// const server = createServer(app);
// const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:5174",
//       methods: ["GET", "POST"],
//       credentials: true,
//     },
//   });

// io.on("connection",(socket) => {
//     console.log("User Connected")
//     console.log("ID",socket.id)

//     socket.on("message",message => socket.emit("newMessage",`${socket.id} : ${message}`))
// })

// app.get("/",(req,res) => {
//     res.status(200).send("Works!")
// })

// server.listen(3002,() => {
//     console.log("Server is running...")
// })

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
        cors: {
          origin: "http://localhost:5174",
          methods: ["GET", "POST"],
          credentials: true,
        }})
app.get("/",(req,res) => res.send("Hi"))

// When a client connects to the server
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen to the join event to add users to a live stream room
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  // Broadcast a message to a specific room
  socket.on('chatMessage', ({ roomId, message }) => {
    io.to(roomId).emit('message', `${socket.id} : ${message}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Serve the app
server.listen(3002, () => {
  console.log('Server is running on port 3002');
});
