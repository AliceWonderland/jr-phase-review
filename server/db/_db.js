const Sequelize = require('sequelize');
const _db = new Sequelize('postgres://localhost:5432/taco_truck', { logging: false });

module.exports = _db;
