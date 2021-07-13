const Cars = require('./cars-model');

exports.checkCarId = (req, res, next) => {
  console.log('checkCarId wired');
  next();
};

exports.checkCarPayload = (req, res, next) => {
  console.log('checkCarPayload wired');
  next();
};

exports.checkVinNumberValid = (req, res, next) => {
  console.log('checkVinNumberValid wired');
  next();
};

exports.checkVinNumberUnique = (req, res, next) => {
  console.log('checkVinNumberUnique wired');
  next();
};
