const Building = require('../models/building.model');
const mongoose = require('mongoose');

const addBuilding = (req,res) => {

    const { building_name } = req.body;

    if (!building_name){
        return res.status(400).json({
            success: false,
            message: "Parameter \'building_name\' is undefined",
        });
    }

    //create object
    const building = new Building({ building_name });

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
    Building.find({})
        .populate('rooms')
        .then(result => {
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

const viewBuildingById = (req, res) => {
    Building.findById(req.params.id)
        .populate('rooms')
        .then(result =>  res.status(200).json({
                success: true,
                data: result
        })).catch(err => res.status(501).json({
            success: false,
            data: err.message
        }));
};

const updateBuilding = (req, res) => {

    const { building_name } = req.body;

    if (!building_name){
        return res.status(400).json({
            success: false,
            message: "Parameter \'building_name\' is undefined",
        });
    }

    Building.findByIdAndUpdate(req.params.id, {
        building_name
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

const deleteBuilding = (req, res) => {
    Building.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

module.exports = {
    addBuilding,
    getAllBuildings,
    viewBuildingById,
    updateBuilding,
    deleteBuilding
};