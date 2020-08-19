const Room = require('../models/room.model');
const mongoose = require('mongoose');
const buildingModel = require('../models/building.model');

const addRoomToBuilding = async (req,res) => {

    const { room_name, room_type } = req.body;

    if (!room_name){
        return res.status(400).json({
            success: false,
            message: "Parameter \'room_name\' is undefined",
        });
    }

    try {

        const building = await buildingModel.findById(req.params.id);

        if (!building) {
            return res.status(400).json({
                success: false,
                message: `Building not found for provided id \'${req.params.id}\'`
            })
        }

        //create object
        const room = new Room({ room_name, room_type, building: mongoose.Types.ObjectId(req.params.id) });

        const result = await room.save();

        // add room to building
        await buildingModel.findByIdAndUpdate(req.params.id, {
            $push: {
                rooms: result._id
            }
        });

        return res.status(200).json({
            success: true, data: result
        });


    } catch (err) {
        return res.status(500).json({
            success: false, message: err.message
        });
    }
    

}

const getAllRooms = (req, res) => {
    Room.find({}).populate('building').then(result => {
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
    addRoomToBuilding,
    getAllRooms,
    viewRoom,
    updateRoom,
    deleteRoom
};