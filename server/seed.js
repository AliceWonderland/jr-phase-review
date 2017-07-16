const db = require('./db');
const Taco = db.model('taco');
const Protein = db.model('protein');
const Bluebird = require('bluebird');


const proteins = [{
  name: 'beef',
  vegetarian: false
}, {
  name: 'tofu',
  vegetarian: true
}, {
  name: 'sofritas',
  vegetarian: true
}, {
  name: 'chicken',
  vegetarian: false
}];

const tacos = [
  {
    name: 'spicy beef taco',
    price: 300,
    protein: proteins[0]
  },
  {
    name: 'Sofritas taco',
    price:  200,
    protein: proteins[1]
  },
  {
    name: 'crunchy chicken taco',
    price: 350,
    protein: proteins[3]
  }
]

db.sync({force: true})
  .then(() => {
    return Bluebird.map(tacos, taco => {
      return Taco.create(taco, {
        include: [Protein]
      })
    })
  })
  .then(() => {
    console.log('hey it seeded!');
  })
  .catch(err => {
    console.log('err seeding', err);
  })
  .finally(() => {
    db.close();
    console.log('connection closed!')
  })

