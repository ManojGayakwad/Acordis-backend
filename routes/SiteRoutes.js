const express = require('express');
const router = express.Router();
const {createSite} = require('../controllers/SiteController.JS');

router.post('/sites', createSite);


module.exports = router;
