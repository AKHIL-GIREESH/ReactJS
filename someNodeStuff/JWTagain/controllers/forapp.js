const appModel = require("../models/applicationModel")

const getAllTasks = async (req,res) => {
    try{
        const task = await appModel.find({createdBy:req.user.user_ID})
        res.status(200).json({task})
    }catch(err){
        console.log(err)
    }
}

const getTask = async (req,res) => {
    try{
        const task = await appModel.findOne({_id:req.params.id,createdBy:req.user.user_ID})
        res.status(200).json({task})
    }catch(err){
        console.log(err)
    }
}

const createTask = async (req,res) => {
    try{
        req.body.createdBy = req.user.user_ID
        const task = await appModel.create(req.body)
        res.status(200).json({task})
    }catch(err){
        console.log(err)
    }
}

const updateTask = async (req,res) => {
    try{
        const task = await appModel.findOneAndUpdate({_id:req.params.id,createdBy:req.user.user_ID},req.body,{ new: true, runValidators: true })
        res.status(200).json({task})
    }catch(err){
        console.log(err)
    }
}

const deleteTask = async (req,res) => {
    try{
        const task = await appModel.deleteOne({_id:req.params.id,createdBy:req.user.user_ID})
        res.status(200).json({task})
    }catch(err){
        console.log(err)
    }
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}