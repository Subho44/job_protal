const Product = require('../models/productmodel');
const path = require('path');

//insert
exports.createProduct = async(req,res)=>{
    const {name,price,description} =req.body;
    const image = req.file ? req.file.filename : '';

    const product = new Product({name, price, description, image});
    await product.save();
    res.json(product);
};
//view all
exports.getproduct = async(req,res)=>{
    const products = await Product.find();
    res.json(products);
};
//update
exports.updateProduct = async(req, res)=>{
    const {name,price,description} =req.body;
    const image = req.file ? req.file.filename : req.body.oldImage;

    const product =  await Product.findByIdAndUpdate(req.params.id,{
        name,price,description,image
    },{new:true});
    res.json(product);
};
//delete
exports.deleteProduct = async(req,res)=>{

    await Product.findByIdAndDelete(req.params.id);
    res.json({message:'Product deleted'});
};
