const express = require('express');
const router = express.Router();
const {createSite,getAllSites} = require('../controllers/SiteController.JS');

router.post('/sites', createSite);
router.get('/getsite',getAllSites)

module.exports = router;
