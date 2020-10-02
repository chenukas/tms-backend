const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({

    empid: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    faculty: { type: String, required: true },
    department: { type: String, required: true },
    center: { type: String, required: true },
    building: { type: String, required: true },
    level: { type: String, required: true },

    suitable_rooms: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
    ]

});

module.exports = mongoose.model('lecturer', lecturerSchema);