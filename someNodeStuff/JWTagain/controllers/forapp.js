const appModel = require("../models/applicationModel")

const getAllTasks = (req,res) => {
    //console.log(req.params)
    res.status(200).json({status:"works"})
}

const getTask = (req,res) => {
    res.status(200).status("Works!")
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

const updateTask = (req,res) => {
    res.status(200).status("Works!")
}

const deleteTask = (req,res) => {
    res.status(200).status("Works!")
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}