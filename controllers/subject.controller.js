const Subject = require('../models/subject.model');
const subjectModel = require('../models/subject.model');
const mongoose = require('mongoose');

const addSubject = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Subject name is undefined"
        });
    }

    if(!req.body.code) {
        return res.status(400).json({
            success: false,
            message: "Subject code is undefined"
        });
    }

    //Adding subject
    const subject = new Subject(req.body);

    subject.save().then(result => {
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

const viewSubjects = (req, res) => {
    Subject.find({})
        .populate('preferred_rooms.tag')
        .populate('preferred_rooms.room')
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

const viewSubjectById = (req, res) => {
    Subject.findById(req.params.id)
        .populate('preferred_rooms.tag')
        .populate('preferred_rooms.room')
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

const updateSubjectById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Subject name is undefined"
        });
    }

    if(!req.body.code) {
        return res.status(400).json({
            success: false,
            message: "Subject code is undefined"
        });
    }

    Subject.findByIdAndUpdate(req.params.id, {
       year: req.body.year,
       semester: req.body.semester,
       name: req.body.name,
       code: req.body.code,
       lechours: req.body.lechours,
       tutehours: req.body.tutehours,
       labhours: req.body.labhours,
       evahours: req.body.evahours
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

const deleteSubjectById = (req, res) => {
    Subject.findByIdAndDelete(req.params.id).then(result => {
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

const viewCanOverlappingSubjects = (req, res) => {
    Subject.find({noolapping: false}).then(result => {
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

const viewNonParallelSubjects = (req, res) => {
    Subject.find({parallel: false}).then(result => {
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

const updateSubjectParallelById = (req, res) => {
    Subject.findByIdAndUpdate(req.params.id, {
        parallel: true
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
}

const updateSubjectNoolappingById = (req, res) => {
    Subject.findByIdAndUpdate(req.params.id, {
        noolapping: true
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
}

const updatePreferredRooms = async (req, res) => {

    const { preferred_rooms } = req.body;

    if (!preferred_rooms) {
        return res.status(400).json({
            success: false, error: 'Parameter \'preferred_rooms\' is required.'
        });
    }

    if(!Array.isArray(preferred_rooms)) {
        return res.status(400).json({
            success: false, error: 'Invalid arameter \'preferred_rooms\'. [] is required.'
        });
    }

    try {
        const result = await subjectModel.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                preferred_rooms: preferred_rooms
                    .filter((value, index, self) => self.indexOf(value) === index)
                    .map(p => { return { 
                        tag: mongoose.Types.ObjectId(p.tag),
                        room: mongoose.Types.ObjectId(p.room)
                    }})
            }
        }, { new: true });

        return res.status(200).json({
            success: true, data: result
        });
    } catch (err) {
        return res.status(500).json({
            success: false, error: err.message
        })
    }
}

module.exports = {
    addSubject,
    viewSubjects,
    viewSubjectById,
    updateSubjectById,
    deleteSubjectById,
    updateSubjectParallelById,
    viewCanOverlappingSubjects,
    viewNonParallelSubjects,
    updateSubjectNoolappingById,
    updatePreferredRooms
}