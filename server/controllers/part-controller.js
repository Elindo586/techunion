const { Parts } = require('../models');

// controllers for CRUD operations
const partsController = {
    // Get all parts
    getAllParts(req, res) {
        Parts.find({})
            .select('-__v')
            // return response in json format
            .then(dbPartsData => res.json(dbPartsData))
            // log and return an error if one occurs
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Get a single part
    getOnePart({ params }, res) {
        Parts.findOne({ reference: params.reference })
            .then(dbPartsData => {
                if(!dbPartsData) {
                    res.status(404).json({ message: "No part found with this reference code."});
                    return;
                }
                res.json(dbPartsData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Create a part
    createPart({ body }, res) {
        Parts.create(body)
            .then(dbPartsData => res.json(dbPartsData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Update a part
    updatePart({ params, body }, res) {
        Parts.findOneAndUpdate( { reference: params.reference }, body, { new: true, runValidators: true})
            .then(dbPartsData => {
                if(!dbPartsData) {
                    res.status(404).json({ message: "No part found with this reference code."});
                    return;
                }

                res.json(dbPartsData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });            
    },
    // Delete a part
    deletePart({ params }, res) {
        Parts.findOneAndDelete({ reference: params.reference })
            .then(dbPartsData => {
                if(!dbPartsData) {
                    res.status(404).json({ message: "No part found with this reference code."});
                    return;
                }

                res.json(dbPartsData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });            
    }
};

module.exports = partsController;