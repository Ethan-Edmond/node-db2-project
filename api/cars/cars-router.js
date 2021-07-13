// DO YOUR MAGIC
const Cars = require('./cars-model');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require('./cars-middleware');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  Cars.getAll()
    .then(cars => {
      res.json(cars);
    })
    .catch(next);
});


router.get('/:id', checkCarId, ({car}, res, next) => {
  res.json(car);
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
  const {vin, make, model, mileage, title, transmission} = req.body;
  Cars.create({
    vin, make, model, mileage, title, transmission
  })
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(next);
});

module.exports = router;
