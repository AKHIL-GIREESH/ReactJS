const Task = require("../models/tasks")

const getAllTasks = async (req,res) => {
    try{
        const task = await Task.find({})
        res.status(200).json({task})
    }
    catch(err)
    {
        res.status(500).json({message:err})
    }
}

const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(200).json({task})
    }
    catch(err)
    {
        res.status(500).json({message:err})
    }
}

const getTask = async(req,res) => {
    try{
        const task = await Task.findOne({_id:req.params.id})
        task?res.status(200).json({task}):res.status(404).json({message:`No task with id ${req.params.id}`})
    }
    catch(err)
    {
        res.status(500).json({message:err})
    }
}

const updateTask = async (req,res) => {
    try{
        const task = await Task.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true,runValidators:true})
        task?res.status(200).json({task}):res.status(404).json({message:`No task with id ${req.params.id}`})
    }
    catch(err)
    {
        res.status(500).json({message:err})
    }
}

const deleteTask = async (req,res) => {
    try{
        const task = await Task.deleteOne({_id:req.params.id})
        task?res.status(200).json({task}):res.status(404).json({message:`No task with id ${req.params.id}`})
    }
    catch(err)
    {
        res.status(500).json({message:err})
    }
}

module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask}