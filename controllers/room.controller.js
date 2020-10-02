const Room = require('../models/room.model');
const mongoose = require('mongoose');
const buildingModel = require('../models/building.model');
const roomModel = require('../models/room.model');

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
    Room.find({})
        .populate('building')
        .populate('tags')
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
}

const getAllRoomsByBuilding = (req, res) => {
    Room.find({ building: req.params.id })
        .populate('building')
        .populate('tags')
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

const viewRoom = (req, res) => {
    Room.findById(req.params.id)
        .populate('building')
        .populate('tags')
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

const updateRoom = (req, res) => {

    const { room_name, room_type } = req.body;

    if (!room_name || !room_type){
        return res.status(400).json({
            success: false,
            message: "Invalid parameters",
            error: {
                required: ['room_name', 'room_type'],
                received: [...Object.values(req.body)]
            }
        });
    }

    Room.findByIdAndUpdate(req.params.id,{
        room_name, room_type
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

const deleteRoom = async (req, res) => {

    try {
        const result = await Room.findByIdAndDelete(req.params.id);

        if (result && result.building) {
            await buildingModel.findByIdAndUpdate(result.building, {
                $pullAll: {
                    rooms: [req.params.id]
                }
            });
        }

        return res.status(200).json({
            success: true, data: result
        });

    } catch (err) {
        return res.status(500).json({
            success: false, 
            message: err.message,
        });
    }

};

const updateTags = async (req, res) => {

    const { tags } = req.body;

    if (!tags) {
        return res.status(400).json({
            success: false, error: 'Parameter \'tags\' is required'
        });
    }

    if (!Array.isArray(tags)) {
        return res.status(400).json({
            success: false, error: 'Invalid parameter \'tags\'. [] required'
        });
    }

    try {
        const result = await roomModel.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                tags: tags.filter((value, index, self) => self.indexOf(value) === index)
                        .map(t => mongoose.Types.ObjectId(t))
            }
        }, { new: true });

        return res.status(200).json({
            success: true, data: result
        });
    } catch (err) {
        return res.status(500).json({
            success: false, error: err.message
        });
    }
}

const addUnavailableTime = (req, res) => {

    const { from, to } = req.body;

    if (!from || !to || typeof from !== 'string' || typeof to !== 'string') {
        return res.status(400).json({
            success: false, error: 'Invalid or missing parameters'
        });
    }

    Room.findByIdAndUpdate(req.params.id, {
        $push: {
            unavailable: {
                from, to
            }
        }
    }, { new: true }).then(result => res.status(200).json({ success: true, data: result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));

};

const removeUnavailableTime = (req, res) => {
    Room.findByIdAndUpdate(req.params.roomId, {
        $pull: {
            unavailable: {
                _id: req.params.id
            }
        }
    }, { new: true, safe: true }).then(result => res.status(200).json({ success: true, data: result }))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
}

module.exports = {
    addRoomToBuilding,
    getAllRooms,
    getAllRoomsByBuilding,
    viewRoom,
    updateRoom,
    deleteRoom,
    updateTags,
    addUnavailableTime,
    removeUnavailableTime
};