// DO YOUR MAGIC
const Cars = require('./cars-model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  Cars.getAll()
    .then(cars => {
      res.json(cars);
    })
    .catch(next);
});


router.get('/:id', (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      res.json(car);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Cars.create(req.car)
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(next);
});

module.exports = router;
