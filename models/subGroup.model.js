const mongoose = require('mongoose');

const subGroupSchema = new mongoose.Schema({
    name: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('subGroup', subGroupSchema);