const SubGroup = require('../models/subGroup.model');

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
    SubGroup.find({}).then(result => {
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
    SubGroup.findById(req.params.id).then(result => {
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

module.exports = {
    createSubGroup,
    viewSubGroups,
    viewSubGroupById,
    updateSubGroupById,
    deleteSubGroupById
}