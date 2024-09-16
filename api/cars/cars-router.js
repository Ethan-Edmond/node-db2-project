// DO YOUR MAGIC
const Cars = require('./cars-model');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  checkVinUniqueOrMatch
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

router.put('/:id', checkCarId, checkCarPayload, checkVinNumberValid, checkVinUniqueOrMatch, (req, res, next) => {
  Cars.update(req.params.id, req.body)
    .then(updated => {
      res.json(updated);
    })
    .catch(next);
});

router.delete('/:id', checkCarId, (req, res, next) => {
  const deletedCar = req.car;
  Cars.remove(req.params.id)
    .then(deletedNum => {
      res.json(deletedCar);
    })
    .catch(next);
});

module.exports = router;
