const router = require("express").Router();
const partsRoutes = require("./parts-routes");
const cylindersRoutes = require("./cylinders-routes");

// add prefixes to routes ex. '/parts'
router.use("/parts", partsRoutes);

router.use("/cylinders", cylindersRoutes);

module.exports = router;
