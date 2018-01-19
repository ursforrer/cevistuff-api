const router = require('express').Router();
const locationController = require('../controller/locationController');

router.get('/', locationController.getAllLocations);

module.exports = router;