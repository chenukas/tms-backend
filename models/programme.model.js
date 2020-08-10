const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    name: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('programme', programSchema);