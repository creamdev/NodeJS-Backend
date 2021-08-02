const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    colors:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
})

exports.Product = mongoose.model('Product',ProductSchema)