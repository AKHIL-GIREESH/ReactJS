const Products = require("../models/product")

const getAllProducts = (req,res) => {
    res.status(200).send("All Products")
}

const getAllProductsStatic = (req,res) => {
    res.status(200).send("All Products Static")
}

module.exports = {getAllProducts,getAllProductsStatic}