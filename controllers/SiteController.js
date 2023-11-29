const Site = require('../models/Site.JS');

const createSite = async (req, res) => {
  try {
    const siteData = req.body;

    const newSite = new Site(siteData);

    await newSite.save();

    res.status(201).json(newSite);
  } catch (error) {
    console.error('Error creating site:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    createSite
  };