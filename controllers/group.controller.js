const Group = require('../models/group.model');

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
    Group.find({}).then(result => {
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
    Group.findById(req.params.id).then(result => {
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

module.exports = {
    createGroup,
    viewGroups,
    viewGroupById,
    updateGroupById,
    deleteGroupById
}