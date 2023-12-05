const Sequelize = require('sequelize');
const config = require('../dbConfig.js')['development'];
// const User = require('./User.js');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./User.js')(sequelize, Sequelize);

module.exports = db;