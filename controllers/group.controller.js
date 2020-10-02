const Group = require('../models/group.model');
const mongoose = require('mongoose');

const createGroup = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Group number is undefined"
        });
    }

    const group = new Group(req.body);

    group.save().then(result => {
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
};

const viewGroups = (req, res) => {
    Group.find({})
        .populate('suitable_rooms')
        .then(result => {
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

const viewGroupById = (req, res) => {
    Group.findById(req.params.id)
        .populate('suitable_rooms')
        .then(result => {
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

const updateGroupById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Group number is undefined"
        });
    }

    Group.findByIdAndUpdate(req.params.id,{
        name: req.body.name
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

const deleteGroupById = (req, res) => {
    Group.findByIdAndDelete(req.params.id).then(result => {
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

const updateSuitableRooms = (req, res) => {
    const { suitable_rooms } = req.body;

    if (!suitable_rooms || !Array.isArray(suitable_rooms)) {
        return res.status(400).json({
            success: false, error: 'Invalid or missing parameters'
        });
    }

    Group.findByIdAndUpdate(req.params.id, {
        $set: {
            suitable_rooms: suitable_rooms
                .filter((value, index, self) => self.indexOf(value) === index)
                .map(r => mongoose.Types.ObjectId(r))
        }
    }, { new: true }).then(result => res.status(200).json({ success: true, data: result}))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
}

module.exports = {
    createGroup,
    viewGroups,
    viewGroupById,
    updateGroupById,
    deleteGroupById,
    updateSuitableRooms
}