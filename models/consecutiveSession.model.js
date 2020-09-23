const mongoose = require('mongoose');
const { Schema } = mongoose;

const consecutiveSessionSchema = new Schema({
    session1: { type: Schema.Types.ObjectId, ref: 'session'},
    session2: { type: Schema.Types.ObjectId, ref: 'session'}
}, { timestamps: true});

module.exports = mongoose.model('consecutivesessions', consecutiveSessionSchema);