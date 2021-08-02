const express = require('express');
const { Country } = require('../models/country');
const router = express.Router();

router.get('/',async (req,res)=>{
    const countries = await Country.find();

    if(!countries){
        res.status(404).json({success:false})
    }
    res.send(countries)
})

module.exports = router