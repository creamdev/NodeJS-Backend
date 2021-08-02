const express = require('express');
const { Order } = require('../models/order');
const router = express.Router();


router.get('/',async(req,res)=>{
    const orderList = await Order.find();

    if(!orderList){
        res.status(500).json({success:false})
    }
    res.send(orderList)
})

router.get('/:id',async(req,res)=>{
    const order =await Order.findById(req.params.id);

    if(!order){
        res.status(500).json({success:false})
    }
    res.status(200).send(order)
})

router.post('/',async(req,res)=>{
    let order = new Order({
        orderNo:req.body.orderNo,
        addressInfo:req.body.addressInfo,
        productInfo:req.body.productInfo,
        userInfo:req.body.userInfo
    })
    order = await order.save();

    if(!order){
        res.status(404).send('The Order Cannot Be Created !')
    }
    res.send(order)
})

router.delete('/:id',async(req,res)=>{
    Order.findByIdAndDelete(req.params.id).then(order=>{
        if(order){
            res.status(200).json({success:true,message:'Order Deleted'})
        }else{
            res.status(404).json({success:false,message:'Order not Deleted'})
        }
    }).catch(err=>{
        return res.status(400).json({success:false,error:err})
    })
})
module.exports=router