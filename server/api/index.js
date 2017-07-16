const express = require('express');
const router = express.Router();
const db = require('../db');
const Protein = db.model('protein');
const Taco = db.model('taco');


router.get('/tacos', (req, res, next) => {
  Taco.findAll()
  .then(tacos => {
    res.json(tacos)
  })
  .catch(next)
})

router.post('/tacos', (req, res, next) => {
  Protein.findOrCreate({
    where: {
      name: req.body.protein
    }
  })
  .then(([protein, created]) => {
    return protein.createTaco({
      name: req.body.name,
      price: +req.body.price
    })
    .then(taco => {
      res.status(201).json(taco);
    });
  })
  .catch(next);
});



router.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = router;
