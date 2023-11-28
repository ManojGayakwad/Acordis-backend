const ChargingStation = require('../models/ChargingStation.js');

const searchChargingStations = async (req, res) => {
  try {
    const { search, sortBy, order } = req.query;

    // Define a regular expression for the search term
    const regex = new RegExp(search, 'i'); // 'i' for case-insensitive search

    // Create a dynamic sort object based on the sortBy and order parameters
    const sort = {};

    // Check if sortBy is not empty before setting it in the sort object
    if (sortBy) {
      sort[sortBy] = order === 'asc' ? 1 : -1;
    }

    // Search charging stations based on the provided search term and apply sorting
    const searchResults = await ChargingStation.find({
      $or: [
        { UTILISATION_TODAY: { $regex: regex } },
        { SITE_NAME: { $regex: regex } },
        { ADDRESS: { $regex: regex } },
        { STATE: { $regex: regex } },
        { COUNTRY: { $regex: regex } },
        { POSTCODE: { $regex: regex } },
        { AVAILABILITY: { $regex: regex } },
        { LOCATION: { $regex: regex } }
        // Add more fields as needed for your search
      ],
    }).sort(sort);

    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching charging stations:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};





const getAllChargingStations = async (req, res) => {
  try {
    // Fetch all charging stations from the database
    const chargingStations = await ChargingStation.find();

    res.status(200).json(chargingStations);
  } catch (error) {
    console.error('Error fetching charging stations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function for handling POST requests
const createChargingStation = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      UTILISATION_TODAY,
      CUSTOMERS_TODAY,
      SITE_NAME,
      ADDRESS,
      STATE,
      COUNTRY,
      POSTCODE,
      NUM_CHARGES,
      AVAILABILITY,
      LOCATION,
    } = req.body;

    // Create a new ChargingStation instance
    const newChargingStation = new ChargingStation({
      UTILISATION_TODAY,
      CUSTOMERS_TODAY,
      SITE_NAME,
      ADDRESS,
      STATE,
      COUNTRY,
      POSTCODE,
      NUM_CHARGES,
      AVAILABILITY,
      LOCATION,
    });

    // Save the new charging station to the database
    const savedChargingStation = await newChargingStation.save();

    res.status(201).json(savedChargingStation);
  } catch (error) {
    console.error('Error creating charging station:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createChargingStation, getAllChargingStations, searchChargingStations,
};
