const router = require('express').Router();

const {
    getAllParts,
    getOnePart,
    createPart,
    updatePart,
    deletePart
} = require('../../controllers/part-controller');

// setting up the router for getting all parts and creating parts
router
    .route('/')
    .get(getAllParts)
    .post(createPart);

// setting up routes or by :reference for updating and deleting parts
router
    .route('/:reference')
    .get(getOnePart)
    .put(updatePart)
    .delete(deletePart);

module.exports = router;