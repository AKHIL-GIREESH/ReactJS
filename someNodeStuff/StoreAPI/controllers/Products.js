const Products = require("../models/product")

const getAllProducts = async(req,res) => {
    // console.log({
    //     name: req.query.name ,
    //     featured: req.query.featured
    // })
    
    try{
    const products = await Products.find({name:{ $exists: true }})
    res.status(200).json({products,hits:products.length})
    }catch(err){
        console.log(err)
    }
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