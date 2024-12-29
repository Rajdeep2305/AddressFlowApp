const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/', addressController.createAddress);
router.get('/', addressController.getAllAddresses);

// Additional routes can be added here

module.exports = router;