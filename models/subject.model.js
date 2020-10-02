const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema ({

    year: { type: String, required: true },
    semester: { type: String, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    lechours: { type: Number, required: true },
    tutehours: { type: Number, required: true },
    labhours: { type: Number, required: true },
    evahours: { type: Number },
    parallel: { type: Boolean, default: false},
    noolapping: { type: Boolean, default: false},

    preferred_rooms: [
        {
            tag: { type: mongoose.Schema.Types.ObjectId, ref: 'tag' },
            room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
        }
    ],

});

module.exports = mongoose.model('subject', subjectSchema);