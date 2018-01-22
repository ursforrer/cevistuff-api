const Location = require('../models').Location;
const functions = {};

functions.listAllLocations = function (callback) {
    Location.all().then(locations => {
        callback(locations);
    }).catch(error => {
        callback(error);
    });
};

functions.addLocation = function (LocationObject, callback) {
    Location.create({
        name: LocationObject.name,
        address: LocationObject.address,
        notes: LocationObject.notes,
        active: LocationObject.active
    }).then(() => {
        callback("OK");
    }).catch(error => {
        callback(error);
    });
};

functions.getSingleLocation = function (id, callback) {
    Location.findById(id).then(location => {
        callback(location);
    }).catch(error => callback(error));
};

functions.updateLocation = function (LocationObject, callback) {
    Location.findById(LocationObject.id, {
        // ToDo
    }).then(item => {
        let location = item;
        if (!item) {
            callback("Location not found");
        }
        item.update({
            name: LocationObject.name || location.address,
            address: LocationObject.address || location.address,
            notes: LocationObject.notes || location.notes,
            active: LocationObject.active || location.active
        }).then(() => {
            callback("OK");
        }).catch((error) => {
            callback(error);
        })
    }).catch((error) => {
        callback(error);
    });
};

module.exports = functions;