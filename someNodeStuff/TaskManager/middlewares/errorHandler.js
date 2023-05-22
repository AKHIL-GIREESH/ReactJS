const errorHandler = (req,res) => {
    res.status(500).json({msg:"Oops! Something went wrong"})
}

module.exports = errorHandler