const mongoose = require('mongoose');

const subGroupSchema = new mongoose.Schema({
    name: { type: String, required: true },

    suitable_rooms: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
    ]
},
{ timestamps: true }
);

module.exports = mongoose.model('subGroup', subGroupSchema);