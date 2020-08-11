const Programme = require('../models/programme.model');

const createProgramme = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Programme name is undefined"
        });
    }

    const programme = new Programme(req.body);

    programme.save().then(result => {
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

const viewProgrammes = (req, res) => {
    Programme.find({}).then(result => {
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

const viewProgrammeById = (req, res) => {
    Programme.findById(req.params.id).then(result => {
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

const updateProgrammeById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Programme name is undefined"
        });
    }

    Programme.findByIdAndUpdate(req.params.id,{
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

const deleteProgrammeById = (req, res) => {
    Programme.findByIdAndDelete(req.params.id).then(result => {
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
    createProgramme,
    viewProgrammes,
    viewProgrammeById,
    updateProgrammeById,
    deleteProgrammeById
}