const router = require('express').Router();
const locationController = require('../controller/locationController');

router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;