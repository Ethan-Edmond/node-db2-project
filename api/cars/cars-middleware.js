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
  const { vin, make, model, mileage } = req.body;
  let emptyField = '';

  if (vin) {
    if (make) {
      if (model) {
        if (mileage === undefined) {
          emptyField = 'mileage';
        }
      } else {
        emptyField = 'model';
      }
    } else {
      emptyField = 'make';
    }
  } else {
    emptyField = 'vin';
  }

  if (emptyField.length) {
    res.status(400).json({
      message: `${emptyField} is missing`
    });
  } else {
    next();
  }
};

exports.checkVinNumberValid = (req, res, next) => {
  console.log('checkVinNumberValid wired');
  next();
};

exports.checkVinNumberUnique = (req, res, next) => {
  console.log('checkVinNumberUnique wired');
  next();
};
