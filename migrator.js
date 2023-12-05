// migrator.js
const { Umzug, SequelizeStorage} = require('umzug')
const {Sequelize} = require("sequelize");
const path = require("path");
const dbConfig = require('./dbConfig')['development'];
const fs = require('fs')


const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: dbConfig.dialect
});



const umzug = new Umzug({

    migrations: {
        glob: 'migrations/*.js',
        params: [
            sequelize.getQueryInterface(),
            Sequelize // Sequelize constructor - the required module
        ],
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console
});

(async () => {
    try {
        await sequelize.authenticate()
        await umzug.runAsCLI();
        console.log('Connection established and migrations run.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})()