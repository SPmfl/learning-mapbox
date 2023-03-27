const Feature = require('../db/db-models/feature.model.js');
const { Op } = require('sequelize');

const markController = {};


markController.getAllFeatures = (req, res)=>{
    res.status(200).send("<h1>Hola getAllFeatures</h1>");
}

markController.getFeature = (req, res)=>{

}

markController.createFeature = (req, res)=>{

}

markController.deleteFeature = (req, res)=>{

}

markController.updateFeature = (req, res)=>{

}


module.exports = markController;