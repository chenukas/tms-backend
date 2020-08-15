const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('group', groupSchema);