const LocationService = require('../service/locationService');
const functions = {};

functions.getAllLocations = function (req, res) {
    LocationService.listAllLocations(function (locations) {
        res.status(200).send(locations);
    });
};

functions.createLocation = function (req, res) {
    let LocationObject = {};
    LocationObject.address = req.body.address;
    LocationObject.notes = req.body.notes;
    LocationObject.name = req.body.name;
    LocationObject.active = true;

    LocationService.addLocation(LocationObject, function (callback) {
        res.status(200).send("LOCATION CREATED" + callback);
    });
};

functions.getLocationById = function (req, res) {
    LocationService.getSingleLocation(req.params.id, function (callback) {
        res.status(200).send(callback);
    })
};

functions.updateLocation = function (req, res) {
    let LocationObject = {};
    LocationObject.id = req.params.id;
    LocationObject.address = req.body.address;
    LocationObject.notes = req.body.notes;
    LocationObject.name = req.body.name;
    LocationObject.active = req.body.active;

    LocationService.updateLocation(LocationObject, function (callback) {
        res.status(200).send(callback);
    });
};

module.exports = functions;