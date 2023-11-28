const mongoose = require('mongoose');

const chargingStationSchema = new mongoose.Schema({
  UTILISATION_TODAY: { type: String, required: true },
  CUSTOMERS_TODAY: { type: Number, required: true },
  SITE_NAME: { type: String, required: true },
  ADDRESS: { type: String, required: true },
  STATE: { type: String, required: true },
  COUNTRY: { type: String, required: true },
  POSTCODE: { type: String, required: true },
  NUM_CHARGES: { type: Number, required: true },
  AVAILABILITY: { type: String, required: true },
  LOCATION: { type: String, required: true },
});

const ChargingStation = mongoose.model('ChargingStation', chargingStationSchema);

module.exports = ChargingStation;
