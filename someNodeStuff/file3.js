const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Server Running")
}
})

server.listen(3000)