const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const usersController = require('../controllers/users');

router.get(`/`, usersController.getUsers);
router.get('/:id', usersController.getUser);
router.put('/:id',usersController.updateUser);
router.delete('/:id',usersController.deleteUser);



module.exports =router;