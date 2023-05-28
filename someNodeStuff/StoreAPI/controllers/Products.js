const Products = require("../models/product")

const getAllProducts = (req,res) => {
    res.status(200).send("All Products")
}

const getAllProductsStatic = async (req,res) => {
    try{
    const staticProducts = await Products.find({featured:true})
    console.log(staticProducts)
    res.status(200).json({staticProducts,hits:staticProducts.length})
    }catch(err){
        console.log(err)
    }
}

module.exports = {getAllProducts,getAllProductsStatic}