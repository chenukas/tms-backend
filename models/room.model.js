const mongoose = require('mongoose');
// const { Schema } = mongoose;

const roomSchema = new Schema(
    {
        roomn: { type: String, required: true, unique: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Room', roomSchema);