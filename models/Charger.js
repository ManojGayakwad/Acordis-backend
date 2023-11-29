const mongoose = require('mongoose');

const chargerSchema = new mongoose.Schema({
  localId: { type: String, required: true },
  mac: { type: String, required: true },
  serial: { type: String, required: true },
  capacity: { type: Number, required: true },
  site: { type: mongoose.Schema.Types.ObjectId, ref: 'Site', required: true },
});

const Charger = mongoose.model('Charger', chargerSchema);

module.exports = Charger;
