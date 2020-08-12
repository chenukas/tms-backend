const Lecturer = require('../models/lecturer.model');
const mongoose = require('mongoose');

const addLecturer = (res, req) => {

    if(!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's first name is undefined"
        })
    }

    if(!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's last name is undefined"
        })
    }

    //Adding lecturer
    const lecturer = new Lecturer(req.body);

    lecturer.save().then(result => {
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

const viewLecturers = (req, res) => {
    Lecturer.find({}).then(result => {
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

const viewLecturersById = (req, res) => {
    Lecturer.findById(req.params.id).then(result => {
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


module.exports = {
    addLecturer,
    viewLecturers,
    viewLecturersById
}