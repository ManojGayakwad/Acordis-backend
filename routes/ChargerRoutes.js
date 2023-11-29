const express = require('express');
const router = express.Router();
const {createCharger} = require('../controllers/ChargerController.js');

router.post('/chargers', createCharger);



module.exports = router;
