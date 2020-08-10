const mongoose = require('mongoose');

const yearSemSchema = new mongoose.Schema({
    name: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('yearSem', yearSemSchema);