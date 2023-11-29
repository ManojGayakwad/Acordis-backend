const Charger = require('../models/Charger.JS');
const Site = require('../models/Site.JS');

const createCharger = async (req, res) => {
    try {
      
      const site = await Site.findOne();
  
      if (!site) {
        return res.status(404).json({ error: 'No site found to associate with the charger.' });
      }
  
      const chargerData = req.body;
  
      const newCharger = new Charger({
        ...chargerData,
        site: site._id,
      });
  
      await newCharger.save();
  
      await Site.findByIdAndUpdate(site._id, { $push: { chargers: newCharger._id } });
  
      res.status(201).json(newCharger);
    } catch (error) {
      console.error('Error creating charger:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports = {
    createCharger
  };