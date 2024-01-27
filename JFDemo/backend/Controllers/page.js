const JFDriver = require("../Models/Schema")

const GetAllPages = async (req,res) => {
    try{
        let Pages = await JFDriver.find({})
        res.status(200).json({Pages})
    }catch(err){
        console.log(err)
    }
    //res.status(200).send("Fetched all of em")
}

const GetAPage = async (req,res) => {
    try{
        let Page = await JFDriver.findOne({date: req.params.id})
        res.status(200).json({Page})
    }catch(err){
        console.log(err)
    }
    
}

const CreatePage =async (req,res) => {
    try{
        let newPage = await JFDriver.create(req.body)
        res.status(200).json({newPage})
    }catch(err){
        console.log(err)
    }
}

const UpdatePage = async (req,res) => {
    try{
        let newPage = await JFDriver.findOneAndUpdate(
            {date:req.params.id},
            req.body,
            {new:true,runValidators:true})
        res.status(200).json({newPage})
    }catch(err){
        console.log(err)
    }
}

const RemovePage = async (req,res) => {
    try{
        let deletedpage = await JFDriver.deleteOne({date:req.params.id})
        res.status(200).json({deletedpage})
    }catch(err){
        console.log(err)
    }
    res.status(200).send("Deletion")
}

module.exports= {GetAPage,GetAllPages,CreatePage,UpdatePage,RemovePage}