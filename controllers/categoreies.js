const express = require('express');
const { Category } = require('../models/category');


 exports.getCategories = async (req, res) =>{
    const categoryList = await Category.find();

    if(!categoryList) {
        res.status(500).json({success: false})
    } 
    res.send(categoryList);
};

exports.getCategory = async (req,res)=>{
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(500).json({message:'Not Found Category ID'})
    }
    res.status(200).send(category)
}

exports.newCategory = async(req,res)=>{
    let category = new Category({
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color
    })
    category = await category.save();

    if(!category)
        return res.status(404).send('The Category Cannot Be Created !')
    res.send(category)
}

 exports.updateCategory = async(req,res)=>{
    const category = Category.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
            icon:req.body.icon,
            color:req.body.color
        },{new:true})
        if(!category)
        return res.status(404).send('The Category Cannot Be Uptaded !')
        res.send(category)
}

exports.deleteCategory = (req,res)=>{
    Category.findByIdAndDelete(req.params.id).then(category=>{
        if(category){
            res.status(200).json({success:true,message:'Category Deleted.'})
        }else{
            res.status(404).json({success:false,message:'Category Not Deleted.'})
        }
    }).catch(err=>{
        return res.status(400).json({success:false,error:err})
    })
}
