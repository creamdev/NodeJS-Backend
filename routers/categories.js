const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoreies')

router.get(`/`, categoriesController.getCategories);
router.get('/:id',categoriesController.getCategory);
router.post('/',categoriesController.newCategory);
router.put('/:id',categoriesController.updateCategory);
router.delete('/:id',categoriesController.deleteCategory);

module.exports=router