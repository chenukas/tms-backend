const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('batch', batchSchema);