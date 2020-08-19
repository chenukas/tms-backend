const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ROOM_TYPES } = require('../services/constants');

const roomSchema = new Schema(
    {
        room_name: { type: String, required: true, unique: true },
        room_type: { type: Number, enum: [...Object.values(ROOM_TYPES)], default: ROOM_TYPES.LECTURE_HALL },
        building: { type: Schema.Types.ObjectId, ref: 'Building', required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Room', roomSchema);