const express = require('express');
const router = express.Router();

// import the controllers

const locationController = require("../Controlls/restcontrol");
router.get('/Restaurants', locationController.getAllLocations);
router.get('/Restaurants/:name', locationController.getAllLocationsbyname);// type localhost:3434/Resturants/Delhi 
//here the semicolon is the syntax  // type localhost:3434/Resturants/Mumbai

module.exports = router;