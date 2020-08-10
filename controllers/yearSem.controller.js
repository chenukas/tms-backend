const YearSem = require('../models/yearSem.model');

const createYearSem = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Year & Semester is undefined"
        });
    }

    const yearsem = new YearSem(req.body);

    yearsem.save().then(result => {
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

const viewYearSems = (req, res) => {
    YearSem.find({}).then(result => {
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

const viewYearSemById = (req, res) => {
    YearSem.findById(req.params.id).then(result => {
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

const updateYearSemById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Year & Semester is undefined"
        });
    }

    YearSem.findByIdAndUpdate(req.params.id,{
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

const deleteYearSemById = (req, res) => {
    YearSem.findByIdAndDelete(req.params.id).then(result => {
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
    createYearSem,
    viewYearSems,
    viewYearSemById,
    updateYearSemById,
    deleteYearSemById
}