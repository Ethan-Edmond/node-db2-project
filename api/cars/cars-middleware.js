const Cars = require('./cars-model');
const vinValid = require('vin-validator').validate;

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

  switch(undefined) {
  case vin:
    emptyField = 'vin';
    break;
  case make:
    emptyField = 'make';
    break;
  case model:
    emptyField = 'model';
    break;
  case mileage:
    emptyField = 'mileage';
    break;
  }

  if (emptyField.length) {
    res.status(400).json({
      message: `${emptyField} is missing`
    });
  } else {
    next();
  }
};

exports.checkVinNumberValid = ({body: {vin}}, res, next) => {
  if (vinValid(vin)) {
    next();
  } else {
    res.status(400).json({
      message: `vin ${vin} is invalid`
    });
  }
};

exports.checkVinNumberUnique = ({body: {vin}}, res, next) => {
  Cars.getAll()
    .then(cars => {
      const vins = new Set(cars.map(car => car.vin));
      if (vins.has(vin)) {
        res.status(400).json({
          message: `vin ${vin} already exists`
        });
      } else {
        next();
      }
    })
    .catch(next);
};

exports.checkVinUniqueOrMatch = (req, res, next) => {
  const id = Number(req.params.id);
  const vin = req.body.vin;
  Cars.getAll()
    .then(cars => {
      const diffCars = cars.filter(car => car.id !== id);
      const diffVins = new Set(diffCars.map(car => car.vin));
      if (diffVins.has(vin)) {
        res.status(400).json({
          message: `vin ${vin} is used by another car`
        });
      } else {
        next();
      }
    })
    .catch(next);
};
