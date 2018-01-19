const routes = require('express').Router();
const location = require('location');
const group = require('group');
const user = require('user');

routes.use('/locations', location);
routes.use('/groups', group);
routes.use('/users', user);

module.exports = routes;