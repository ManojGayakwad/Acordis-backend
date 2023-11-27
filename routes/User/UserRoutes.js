const express = require('express');
const registerUser = require("../../controllers/User/UserController.js");

const router = express.Router();

router.post('/registeruser',registerUser);

module.exports = router;