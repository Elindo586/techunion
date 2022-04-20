const { Cylinders } = require("../models");

// controllers for CRUD operations
const cylindersController = {
  // Get all parts
  getAllCylinders(req, res) {
    Cylinders.find({})
      .select("-__v")
      // return response in json format
      .then((dbPartsData) => res.json(dbPartsData))
      // log and return an error if one occurs
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Get a single part
  getOneCylinders({ params }, res) {
    Cylinders.findOne({ reference: params.reference })
      .then((dbPartsData) => {
        if (!dbPartsData) {
          res
            .status(404)
            .json({ message: "No part found with this reference code." });
          return;
        }
        res.json(dbPartsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Create a part
  createCylinders({ body }, res) {
    Cylinders.create(body)
      .then((dbPartsData) => res.json(dbCylindersData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Update a part
  updateCylinders({ params, body }, res) {
    Cylinders.findOneAndUpdate({ reference: params.reference }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbPartsData) => {
        if (!dbPartsData) {
          res
            .status(404)
            .json({ message: "No part found with this reference code." });
          return;
        }

        res.json(dbPartsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Delete a part
  deletePart({ params }, res) {
    Cylinders.findOneAndDelete({ reference: params.reference })
      .then((dbPartsData) => {
        if (!dbPartsData) {
          res
            .status(404)
            .json({ message: "No part found with this reference code." });
          return;
        }

        res.json(dbPartsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = cylindersController;
