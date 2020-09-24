const mongoose = require('mongoose');
const { Schema } = mongoose;

const notAvailableLecturerSchema = new mongoose.Schema({
    lecturerId: { type: Schema.Types.ObjectId, ref: 'lecturer'},
    day: { type: String},
    startTime: { type: String},
    endTime: { type: String}
}, {timestamps: true});

module.exports =  mongoose.model('notavailablelecturers', notAvailableLecturerSchema);