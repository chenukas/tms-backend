const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('tag', tagSchema);