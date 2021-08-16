const express = require('express');
const { Country } = require('../models/country');


exports.getCountries = async (req,res)=>{
    const countries = await Country.find();

    if(!countries){
        res.status(404).json({success:false})
    }
    res.send(countries)
}