const ErrorPage = (req,res) => {
    res.status(404).send("Page Not Found")
}

module.exports = ErrorPage
