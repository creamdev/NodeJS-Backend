const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/login', async (req,res) => {
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.secret;
    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn : '1d'}
        )
       
        res.status(200).send({token: token}) 
    } else {
       res.status(400).send('password is wrong!');
    }
})


router.post('/register', async (req,res)=>{
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        isAdmin: req.body.isAdmin,
        surname:req.body.surname,
        name:req.body.name
    })
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})


module.exports = router