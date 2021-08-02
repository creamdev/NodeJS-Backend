const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    addressInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'address',
        required:true
    },
    productInfo:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    }],
    userInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },

})

exports.Order = mongoose.model('Order',OrderSchema)