const router = require('express').Router();

const db = require('../../data/db-config');

router.get('/', (req, res) => {
  db('cars').then((cars) => {
    res.status(200).json(cars);
  });
});

router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {
  db('cars')
    .insert(req.body)
    .then((car) => {
      res.status(201).json({ message: 'inserted car details' });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
