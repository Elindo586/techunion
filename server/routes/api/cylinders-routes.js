const routerCylinder = require("express").Router();

const {
  getAllCylinders,

  createCylinders,
} = require("../../controllers/cylinders-controller");

// setting up the router for getting all parts and creating parts
routerCylinder.route("/").get(getAllCylinders).post(createCylinders);

// setting up routes or by :reference for updating and deleting parts
// routerCylinder
//   .route("/:reference")
//   .get(getOneCylinders)
//   .put(updateCylinders)
//   .delete(deletePart);

module.exports = routerCylinder;
