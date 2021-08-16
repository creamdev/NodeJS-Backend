const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orders');

router.get('/',orderController.getOrders);
router.get('/:id',orderController.getOrder);
router.post('/',orderController.newOrder);
router.delete('/:id',orderController.deleteOrder);

module.exports=router