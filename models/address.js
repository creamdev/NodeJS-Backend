const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    adressType:{
        type:String,
        required:true
    },
    country:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country',
        required:true
    },
    city:{
        type:String,
        required:true
    },
    town:{
        type:String,
        required:true
    },
    neighborhood:{
        type:String,
        required:true
    },
    highroad:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    apartNo:{
        type:String,
        required:true
    },
    apartFloor:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
})

exports.Address = mongoose.model('Address',AddressSchema)