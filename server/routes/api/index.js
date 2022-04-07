const router = require('express').Router();
const partsRoutes = require('./parts-routes');

// add prefixes to routes ex. '/parts'
router.use('/parts', partsRoutes);

module.exports = router;