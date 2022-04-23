// Initialize the API Express Router and the actual routes to each API
const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

// Open the routes by defining the URI path
router.use('/travelers', travelerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes)

// Export the router object
module.exports = router;
