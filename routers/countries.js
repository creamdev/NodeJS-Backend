const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries');

router.get('/',countriesController.getCountries);

module.exports = router