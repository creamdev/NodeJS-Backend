const express = require('express');
const router = express.Router();
const addressesController = require('../controllers/addresses');


router.get('/',addressesController.getAddresses);
router.get('/:id',addressesController.getAddress);
router.post('/',addressesController.newAddress);
router.put('/:id',addressesController.updateAddress);
router.delete('/:id',addressesController.deleteAddress);

module.exports = router