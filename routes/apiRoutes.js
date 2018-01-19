const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const groupRoutes = require('./groupRoutes');
const userRoutes = require('./userRoutes');

router.use('/locations', locationRoutes);
router.use('/groups', groupRoutes);
router.use('/users', userRoutes);

module.exports = router;