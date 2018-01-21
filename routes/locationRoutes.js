const router = require('express').Router();
const locationController = require('../controller/locationController');

router.get('/', locationController.getAllLocations);
router.post('/', locationController.createLocation);
router.get('/:id', locationController.getLocationById);
router.put('/:id', locationController.updateLocation);
router.patch('/:id', locationController.updateLocation);

module.exports = router;