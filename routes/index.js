const routes = require('express').Router();
const locationRoutes = require('./locationRoutes');
const groupRoutes = require('./groupRoutes');
const userRoutes = require('./userRoutes');

//routes.use('/locations', locationRoutes);
routes.use('/groups', groupRoutes);
//routes.use('/users', userRoutes);

module.exports = routes;