const mongoose = require('mongoose');
const { Schema } = mongoose;

const buildingSchema = new Schema(
    {
        buildn: { type: String, required: true, unique: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Building', buildingSchema);