const mongoose = require('mongoose');
const { Schema } = mongoose;

const notAvailableSessionSchema = new mongoose.Schema({
    sessionId: { type: Schema.Types.ObjectId, ref: 'session'},
    day: { type: String},
    startTime: { type: String},
    endTime: { type: String}
}, {timestamps: true});

module.exports =  mongoose.model('notavailablesessions', notAvailableSessionSchema);