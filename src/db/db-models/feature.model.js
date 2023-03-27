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
}, {
  //sequelize,
  tableName: 'Features',
  timestamps: false
});

//Feature.sync().then(()=>console.log("table Features (re)created")).catch(error => console.error(error));


 const syncronizeFeature = async () => {
  try {
    await Feature.sync().then(() => {
      console.log("Feature Model synced");
    });
  } catch (error) {
    console.error("Feature Model Not synced", error );
  }
}


module.exports = { Feature, syncronizeFeature };
