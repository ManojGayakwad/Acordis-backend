const express = require('express');
const router = express.Router();
const { createChargingStation, getAllChargingStations, searchChargingStations } = require('../controllers/chargingStationController.js');

router.post('/charging-stations', createChargingStation);
router.get('/get-charging-station', getAllChargingStations)
router.get('/search', searchChargingStations)
module.exports = router;
