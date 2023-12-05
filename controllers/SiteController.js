const Site = require('../models/Site.JS');



const getAllSites = async (req, res) => {
    try {
        // Fetch all sites from the database
        const sites = await Site.find();

        res.status(200).json(sites);
    } catch (error) {
        console.error('Error fetching sites:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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
    createSite, getAllSites
};