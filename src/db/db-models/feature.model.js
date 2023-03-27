const { sequelize } = require('../db-connection/db-postgres.js');
const { DataTypes } = require('sequelize');

const Feature = sequelize.define('Feature', {
  type: {
    type: DataTypes.STRING,
    defaultValue: "Feature"
  },
  geometry: {
    type: DataTypes.JSON,
    allowNull: false
  }
},{
  sequelize,
  timestamps: false
});

await Feature.sync().then( ()=>{
  console.log("Feature Model synced");
});

module.exports = Feature;
