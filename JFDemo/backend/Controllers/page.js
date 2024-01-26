const JF = require("../Models/Schema")

const GetAllPages = (req,res) => {
    res.status(200).send("Fetched all of em")
}

const GetAPage = (req,res) => {
    res.status(200).send("Fetched one of em")
}

const CreatePage = (req,res) => {
    res.status(200).json(req.body)
}

const UpdatePage = (req,res) => {
    res.status(200).json({page:req.params.id})
}

const RemovePage = (req,res) => {
    res.status(200).send("Deletion")
}

module.exports= {GetAPage,GetAllPages,CreatePage,UpdatePage,RemovePage}