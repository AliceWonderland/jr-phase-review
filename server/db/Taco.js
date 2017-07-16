const db = require('./_db');
const Sequelize = require('sequelize');
const Protein = db.model('protein');


const Taco = db.define('taco', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  getterMethods: {
    price: function() {
      return this.getDataValue('price') / 100
    }
  },
  setterMethods: {
    price: function(dollarValue) {
      this.setDataValue('price', dollarValue * 100)
    }
  },
  defaultScope: {
    include: [Protein]
  }
});


module.exports = Taco;
