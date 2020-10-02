const SubGroup = require('../models/subGroup.model');
const mongoose = require('mongoose');

const createSubGroup = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Sub group number is undefined"
        });
    }

    const subgroup = new SubGroup(req.body);

    subgroup.save().then(result => {
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

const viewSubGroups = (req, res) => {
    SubGroup.find({})
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

const viewSubGroupById = (req, res) => {
    SubGroup.findById(req.params.id)
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

const updateSubGroupById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Sub group number is undefined"
        });
    }

    SubGroup.findByIdAndUpdate(req.params.id,{
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

const deleteSubGroupById = (req, res) => {
    SubGroup.findByIdAndDelete(req.params.id).then(result => {
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

    SubGroup.findByIdAndUpdate(req.params.id, {
        $set: {
            suitable_rooms: suitable_rooms
                .filter((value, index, self) => self.indexOf(value) === index)
                .map(r => mongoose.Types.ObjectId(r))
        }
    }, { new: true }).then(result => res.status(200).json({ success: true, data: result}))
        .catch(err => res.status(500).json({ success: false, error: err.message }));
}

module.exports = {
    createSubGroup,
    viewSubGroups,
    viewSubGroupById,
    updateSubGroupById,
    deleteSubGroupById,
    updateSuitableRooms
}