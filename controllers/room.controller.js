const Room = require('../models/room.model');
const mongoose = require('mongoose');

const addRoom = (req,res) => {
    if (!req.body.roomn){
        return res.status(400).json({
            success: false,
            message: "Name is undefined",
        });
    }

    //create object
    const room = new Room(req.body);

    //save object
    room.save().then(result => {
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

const getAllRooms = (req, res) => {
    Room.find({}).then(result => {
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

const viewRoom = (req, res) => {
    Room.findById(req.params.id).then(result => {
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

const updateRoom = (req, res) => {

    if (!req.body.roomn){
        return res.status(400).json({
            success: false,
            message: "Name is undefined",
        });
    }

    Room.findByIdAndUpdate(req.params.id,{
        roomn: req.body.roomn
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

const deleteRoom = (req, res) => {
    Room.findByIdAndDelete(req.params.id).then(result => {
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
    addRoom,
    getAllRooms,
    viewRoom,
    updateRoom,
    deleteRoom
};