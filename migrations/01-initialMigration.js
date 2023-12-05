// migrations/00_initial.js

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
    await queryInterface.createTable('users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        balance: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 10000,
            validate: {
                min: 0
            }
        }
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('users');
}

module.exports = { up, down };