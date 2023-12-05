const express = require('express');
const router = express.Router();
const { createCharger, getChargers } = require('../controllers/ChargerController.js');

router.post('/chargers', createCharger);
router.get('/getcharger', getChargers)



module.exports = router;
