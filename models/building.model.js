const mongoose = require('mongoose');
const { Schema } = mongoose;

const buildingSchema = new Schema(
    {
        building_name: { type: String, required: true, unique: true },
        rooms: [{type: mongoose.Schema.Types.ObjectId, ref: 'Room'}]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Building', buildingSchema);