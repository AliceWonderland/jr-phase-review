const db = require('./_db');
const Sequelize = require('sequelize');


const Protein = db.define('protein', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  source: Sequelize.STRING,
  vegetarian: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Protein;
