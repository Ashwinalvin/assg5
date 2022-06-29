const express = require('express');
const router = express.Router();

// import the controllers

const locationController = require("../Controlls/restcontrol");
router.get('/widgit', locationController.getAllLocations);


module.exports = router;