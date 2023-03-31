const Express = require("express")
const express = Express()
const {connectToDB,getDB} = require("./db")

let db

connectToDB((err)=>{
    if(!err){
        express.listen(3000,() => console.log("Server is Up and Running"))
    }
    db = getDB()
})

express.get("/",(req,res) => {
    res.status(200).send("<h1>HomePage</h1>")
})

express.get("/books",(req,res) => {
    let books = []

    console.log(db)
    db.collection("Books")
    .find()
    .forEach(element => {
        books.push(element)
    })
    .then(() => res.status(200).json(books)
    )
    .catch(() => {
        res.status(500).json({err:"couldn't find docs"})
    })
})

express.get("/addBooks",(req,res) => {
    const books = []

    db.collection("Books")
    .insertMany([
    {
        Author:"Author3",
        Name: "Book3",
        Rating: 4
    },
    {
        Author:"Author4",
        Name: "Book4",
        Rating: 5
    }
    ])

    db.collection("Books")
    .find()
    .forEach(element => books.push(element))
    .then(() => res.status(200).json(books))
    .catch(() => res.status(500).json({err:"Something went wrong"}))
})