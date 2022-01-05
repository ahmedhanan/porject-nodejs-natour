const {
  getAllToursFromDB,
  addNewTourToDB,
  updateExistingTourInDB,
  getSpecificTourFromDB,
} = require('../models/tours.model');

const response = (res, status, statusCode, message) => {
  res.status(statusCode).json({
    status,
    data: message,
  });
};

async function getAllTours(req, res) {
  const { status, statusCode, message } = await getAllToursFromDB();
  response(res, status, statusCode, message);
}

async function createNewTour(req, res) {
  const body = req.body;
  const { status, statusCode, message } = await addNewTourToDB(body);
  response(res, status, statusCode, message);
}

async function updateExistingTour(req, res) {
  const id = req.params.id;
  const data = req.body;
  const { status, statusCode, message } = await updateExistingTourInDB(
    id,
    data
  );
  response(res, status, statusCode, message);
}

async function getSpecificTour(req, res) {
  const id = req.params.id;
  const { status, statusCode, message } = await getSpecificTourFromDB(id);
  response(res, status, statusCode, message);
}

module.exports = {
  getAllTours,
  createNewTour,
  updateExistingTour,
  getSpecificTour,
};
