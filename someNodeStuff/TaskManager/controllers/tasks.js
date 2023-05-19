const getAllTasks = (req,res) => {
    res.status(200).send("All Tasks")
}

const createTask = (req,res) => {
    res.status(200).send("Create Task")
}

const getTask = (req,res) => {
    res.status(200).send("Get a Task")
}

const updateTask = (req,res) => {
    res.status(200).send("Update Task")
}

const deleteTask = (req,res) => {
    res.status(200).send("Delete Task")
}

module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask}