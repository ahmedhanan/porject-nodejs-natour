const tours = require('./tours.mongo');

const success = (data, code) => {
  return {
    status: 'success',
    statusCode: code,
    message: data,
  };
};

const err = (error) => {
  return {
    status: 'failed',
    statusCode: 404,
    message: error,
  };
};

async function getAllToursFromDB() {
  try {
    const allTours = await tours.find();
    return success(allTours, 200);
  } catch (error) {
    return err(error);
  }
}

async function addNewTourToDB(data) {
  try {
    const saveTour = await tours.create(data);
    const message = `${saveTour.name} created successfully.`;
    return success(message, 201);
  } catch (error) {
    return err(error);
  }
}

async function updateExistingTourInDB(id, data) {
  try {
    const updatedTour = await tours.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return success(updatedTour, 203);
  } catch (error) {
    return err(error);
  }
}

async function getSpecificTourFromDB(id) {
  try {
    const tour = await tours.findById(id);
    return success(tour, 200);
  } catch (error) {
    return err(error);
  }
}

module.exports = {
  getAllToursFromDB,
  addNewTourToDB,
  updateExistingTourInDB,
  getSpecificTourFromDB,
};
