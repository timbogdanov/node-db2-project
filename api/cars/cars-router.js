const router = require('express').Router();

const db = require('../../data/db-config');

router.get('/', (req, res) => {
  db('cars').then((cars) => {
    res.status(200).json(cars);
  });
});

router.get('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((error) => {
      console.log(error);
    });
});

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

router.delete('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .del()
    .then((car) => {
      res.status(200).json({ message: 'deleted record' });
    });
});

router.put('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .update(req.body)
    .then((car) => {
      res.status(200).json({ message: 'updated record' });
    });
});

module.exports = router;
