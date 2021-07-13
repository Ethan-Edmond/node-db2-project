const Cars = require('./cars-model');

exports.checkCarId = (req, res, next) => {
  const id = req.params.id;
  Cars.getById(id)
    .then(car => {
      if (car) {
        req.car = car;
        next();
      } else {
        res.status(404).json({
          message: `car with id ${id} is not found`
        });
      }
    })
    .catch(next);
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
