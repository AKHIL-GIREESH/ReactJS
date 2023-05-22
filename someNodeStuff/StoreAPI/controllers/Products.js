const Products = require("../models/product")

const getAllProducts = (req,res) => {
    res.status(200).send("All Product")
}

const getAllProductsStatic = (req,res) => {
    res.status(200).send("All Product Static")
}

module.exports = {getAllProducts,getAllProductsStatic}