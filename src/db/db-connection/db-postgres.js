const Sequelize  = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbenv = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
}

const sequelize2 = new Sequelize(dbenv.user,dbenv.password, dbenv.database, {
    host: dbenv.host,
    dialect: 'postgres'
});
// const sequelize = new Sequelize('postgres','postgres','postgres',{
//     host: 'db-postgres',
//     dialect: 'postgres'
// });

module.exports = sequelize2;