
const { Sequelize } = require('sequelize');
const {User} = require('../models/User.js');

async function up({ context: queryInterface }) {
    await queryInterface.bulkInsert('users', [{
        balance: 10000
    }], {});
}

async function down({ context: queryInterface }) {
    await queryInterface.bulkDelete('users', null, {});
}

module.exports = { up, down };