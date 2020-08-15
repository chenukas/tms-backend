const Building = require('../models/building.model');
const mongoose = require('mongoose');

const addBuilding = (req,res) => {
    if (!req.body.buildn){
        return res.status(400).json({
            success: false,
            message: "Name is undefined",
        });
    }

    //create object
    const building = new Building(req.body);

    //save object
    building.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });


}

const getAllBuildings = (req, res) => {
    Building.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            data: err.message
        });
    });
};

const viewBuilding = (req, res) => {
    Building.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            data: err.message
        });
    });
};

module.exports = {
    addBuilding,
    getAllBuildings,
    viewBuilding,
    
};