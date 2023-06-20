const getJob = (req,res) => {
    res.status(200).send("(Go) Get a Job")
}

const getAllJobs = (req,res) => {
    res.status(200).send("Get all Job")
}

const createJob = (req,res) => {
    res.status(200).send("Create")
}

const updateJob = (req,res) => {
    res.status(200).send("Update")
}

const deleteJob = (req,res) => {
    res.status(200).send("Delete")
}