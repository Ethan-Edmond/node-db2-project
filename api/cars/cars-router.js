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


router.get('/:id', checkCarId, (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      res.json(car);
    })
    .catch(next);
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
  Cars.create(req.car)
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(next);
});

module.exports = router;
