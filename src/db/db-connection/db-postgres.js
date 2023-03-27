const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbenv = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
}

const sequelize = new Sequelize(dbenv.database, dbenv.user, dbenv.password, {
    host: dbenv.host,
    dialect: 'postgres',
    logging: console.log
});

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully $$.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {sequelize, testDbConnection};