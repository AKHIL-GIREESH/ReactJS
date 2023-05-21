const Task = require("../models/tasks")
const AsyncWrapper = require("../middlewares/asyncWrapper")

const getAllTasks = AsyncWrapper(async (req,res) => {
        const task = await Task.find({})
        res.status(200).json({task})
})

const createTask = AsyncWrapper( async (req,res) => {
        const task = await Task.create(req.body)
        res.status(200).json({task})
})

const getTask = AsyncWrapper( async(req,res) => {
        const task = await Task.findOne({_id:req.params.id})
        task?res.status(200).json({task}):res.status(404).json({message:`No task with id ${req.params.id}`})
})

const updateTask = AsyncWrapper( async (req,res) => {
        const task = await Task.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true,runValidators:true})
        task?res.status(200).json({task}):res.status(404).json({message:`No task with id ${req.params.id}`})
})

const deleteTask = AsyncWrapper( async (req,res) => {
        const task = await Task.deleteOne({_id:req.params.id})
        task?res.status(200).json({task}):res.status(404).json({message:`No task with id ${req.params.id}`})
})

module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask}