const db = require('./_db');
const Protein = require('./Protein');
const Taco = require('./Taco');


Taco.belongsTo(Protein);
//give a proteinId on taco
//give us methods on Taco
Protein.hasMany(Taco);

module.exports = db;
