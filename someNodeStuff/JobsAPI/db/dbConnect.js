const mongoose = require("mongoose")

const dbConnect = (url) => {
    mongoose.connect(url)
}