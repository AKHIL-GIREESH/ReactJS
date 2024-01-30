const appModel = require("../models/applicationModel")

const getAllTasks = (req,res) => {
    // console.log(req)
    res.status(200).json({status:"works"})
}

const getTask = (req,res) => {
    res.status(200).status("Works!")
}

const createTask = (req,res) => {
    res.status(200).status("Works!")
}

const updateTask = (req,res) => {
    res.status(200).status("Works!")
}

const deleteTask = (req,res) => {
    res.status(200).status("Works!")
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}