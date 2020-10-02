const Lecturer = require('../models/lecturer.model');
const mongoose = require('mongoose');

const addLecturer = (req, res) => {

    if(!req.body.empid) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's ID is undefined"
        });
    }

    if(!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's first name is undefined"
        });
    }

    if(!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's last name is undefined"
        });
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
    Lecturer.find({})
        .populate('suitable_rooms')
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

const viewLecturersById = (req, res) => {
    Lecturer.findById(req.params.id)
        .populate('suitable_rooms')
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

const updateLecturerById = (req, res) => {

    if(!req.body.empid) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's ID is undefined"
        });
    }

    if(!req.body.fname) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's first name is undefined"
        });
    }

    if(!req.body.lname) {
        return res.status(400).json({
            success: false,
            message: "Lecturer's last name is undefined"
        });
    }

    Lecturer.findByIdAndUpdate(req.params.id, {
        empid: req.body.empid,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        faculty: req.body.faculty,
        department: req.body.department,
        center: req.body.center,
        building: req.body.building,
        level: req.body.level
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(503).json({
            success: false,
            message: err.message
        });
    });

};

const deleteLecturerById = (req, res) => {
    Lecturer.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err =>{
        res.status(504).json({
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

    Lecturer.findByIdAndUpdate(req.params.id, {
        $set: {
            suitable_rooms: suitable_rooms
                .filter((value, index, self) => self.indexOf(value) === index)
                .map(r => mongoose.Types.ObjectId(r))
        }
    }, { new: true }).then(result => res.status(200).json({ success: true, data: result}))
        .catch(err => res.status(500).json({ success: false, error: err.message }));

}

module.exports = {
    addLecturer,
    viewLecturers,
    viewLecturersById,
    updateLecturerById,
    deleteLecturerById,
    updateSuitableRooms
}