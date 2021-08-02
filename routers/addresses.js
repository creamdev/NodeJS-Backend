const express = require('express');
const { Address } = require('../models/address');
const router = express.Router();


router.get('/',async (req,res)=>{
    const addressList = await Address.find();

    if(!addressList){
        res.status(500).json({success: false})
    }
    res.send(categoryList)
})

router.get('/:id',async (req,res)=>{
    const address = await Address.findById(req.params.id);

    if(!address){
        res.status(500).json({message:'Not Found Address ID'})
    }
    res.status(200).send(address)
})

router.post('/',async(req,res)=>{
    let address = new Address({
        adressType:req.body.adressType,
        country:req.body.country,
        city:req.body.city,
        town:req.body.town,
        neighborhood:req.body.neighborhood,
        highroad:req.body.highroad,
        street:req.body.street,
        apartNo:req.body.apartNo,
        apartFloor:req.body.apartFloor,
        zipCode:req.body.zipCode,
    })
    address = await address.save()

    if(!address)
        return res.status(404).send('Address not created')
    res.send(address)
})

router.put('/:id',async(req,res)=>{
    const address = Address.findByIdAndUpdate(
        req.params.id,
        {
            adressType:req.body.adressType,
            country:req.body.country,
            city:req.body.city,
            town:req.body.town,
            neighborhood:req.body.neighborhood,
            highroad:req.body.highroad,
            street:req.body.street,
            apartNo:req.body.apartNo,
            apartFloor:req.body.apartFloor,
            zipCode:req.body.zipCode,
        },{new:true})
        if(!address)
        return res.status(404).send('The Address Cannot Be Uptaded !')
        res.send(address)
})

router.delete('/:id',(req,res)=>{
    Address.findByIdAndDelete(req.params.id).then(address=>{
        if(address){
            res.status(200).json({success:true,message:'Address Deleted'})
        }else{
            res.status(404).json({success:false,message:'Address not Deleted'})
        }
    }).catch(err=>{
        return res.status(400).json({success:false,error:err})
    })
})

module.exports = router