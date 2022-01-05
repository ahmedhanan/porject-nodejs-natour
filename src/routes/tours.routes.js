const express = require('express');

const {
  getAllTours,
  createNewTour,
  updateExistingTour,
  getSpecificTour,
} = require('../controllers/tours.controller');

const router = express.Router();

router.route('/').get(getAllTours).post(createNewTour);
router.route('/:id').get(getSpecificTour).patch(updateExistingTour);

module.exports = router;
