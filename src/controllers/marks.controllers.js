const { Feature } = require('../db/db-models/feature.model.js');
const { Op } = require('sequelize');


const markController = {};

markController.getAllFeatures = async (req, res)=>{
    try {
        const allFeatures = await Feature.findAll();
        res.status(200).json(allFeatures);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "server error - can't retrieve Features"});
    }
}

markController.getFeature = async (req, res)=>{
    try {
        const id = req.params.id;
        if( id === 0 || id === undefined ){
            res.status(400).json({msg: "id not provided or wrong format"});    
        }
        const allFeatures = await Feature.findAll({
            where: { id: { [Op.eq]: id } }
        });
        res.status(200).json(allFeatures);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "server error - can't retrieve the Feature"});
    }
} 

markController.createFeature = async (req, res)=>{
    try {
        // console.log(req.body);
        // res.send("createFeature")
        const { id, type, geometry } = req.body;
        if( id && type && geometry){
            const newFeature = await Feature.create({ id, type, geometry });
            res.status(200).json(newFeature);
            console.log("feature created");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "server error - can't create Feature"});
    }

}

markController.deleteFeature = async (req, res)=>{
    try {
        const allFeatures = await Feature.findAll();
        res.status(200).json(allFeatures);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "server error - can't retrieve Features"});
    }
}

markController.updateFeature = async (req, res)=>{
    try {
        // const updatedFeature = await Feature.update
        // res.status(200).json(updatedFeature);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "server error - can't retrieve a Feature"});
    }

}


module.exports = markController;

