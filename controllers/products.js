const express = require('express');
const { Product } = require('../models/product');



 exports.getProducts = async (req,res)=>{
    const productList = await Product.find();

    if(!productList){
        res.status(500).json({success: false})
    }
    res.send(productList)
}

exports.getProduct =async (req,res)=>{
   const product = await Product.findById(req.params.id);

   if(!product){
       res.status(500).json({success:false})
   }
   res.status(200).send(product)
}

exports.newProduct = async (req,res)=>{
    let product = new Product({
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock,
        colors:req.body.colors,
        images:req.body.images,
        category:req.body.category
    });
    product=await product.save()

    if(!product)
    return res.status(404).send('The Product Cannot Be Created !')

    res.send(product)
}

exports.updateProduct = async(req,res)=>{
    const updateProduct =await Product.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
            price:req.body.price,
            stock:req.body.stock,
            colors:req.body.colors,
            images:req.body.images,
            category:req.body.category
        },{new:true})
        if(!updateProduct){
           return res.status(404).send('Product is not update')
        }
        res.send(updateProduct)
}

exports.deleteProduct = async(req,res)=>{
    Product.findByIdAndDelete(req.params.id).then(product=>{
        if(product){
            res.status(200).json({success:true,message:'Product Deleted.'})
        }else{
            res.status(404).json({success:false,message:'Product Not Deleted.'})
        }
    }).catch(err=>{
        return res.status(400).json({success:false,error:err})
    })
}