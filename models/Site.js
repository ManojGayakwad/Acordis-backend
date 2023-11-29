const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  postcode:{ type: String, required: true },
  country: { type: String, required: true },
  timezone: { type: String, required: true },
  siteTelephone: { type: String, required: true },
  siteType: { type: String, enum: ['PUBLIC', 'PRIVATE'] },
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
