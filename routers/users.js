const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get(`/`, async (req, res) =>{
    const userList = await User.find().select('-passwordHash');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})

router.get('/:id', async(req,res)=>{
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
})


router.put('/:id',async (req, res)=> {
    const user = await User.findByIdAndUpdate(
        req.params._id,
        {
            username: req.body.username,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            isAdmin: req.body.isAdmin,
            surname:req.body.surname,
            name:req.body.name
        },
        { new: true}
    )
    
    if(!user)
    return res.status(400)

    res.send(user);
})

router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'the user is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "user not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})



module.exports =router;