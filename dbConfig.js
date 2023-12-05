const dotenv = require('dotenv')
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
if (!USERNAME) {
    console.log('please set USERNAME in .env')
}
const PASSWORD = process.env.DB_PASSWORD;
if (!PASSWORD) {
    console.log('please set PASSWORD in .env')
}
const DATABASE = process.env.DB_NAME;
if (!DATABASE) {
    console.log('please set DATABASE in .env')
}
const HOST = process.env.DB_HOST;
if (!HOST) {
    console.log('please set HOST in .env')
}

module.exports = {
    development: {
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        dialect: "postgres",
    }
};