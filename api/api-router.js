const router = require('express').Router();

const carsRouter = require('./cars/cars-router.js');

router.use('/cars', carsRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'api up' });
});

module.exports = router;
