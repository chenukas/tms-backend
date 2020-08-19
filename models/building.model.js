const mongoose = require('mongoose');
const roomModel = require('./room.model');
const { Schema } = mongoose;

const buildingSchema = new Schema(
    {
        building_name: { type: String, required: true, unique: true },
        rooms: [{type: mongoose.Schema.Types.ObjectId, ref: 'Room'}]
    },
    { timestamps: true }
);

async function deleteRoomsOnDelete(building) {
    console.log(building);
    await roomModel
        .deleteMany({ _id: { $in: building.rooms }});
}

buildingSchema.post('remove', deleteRoomsOnDelete);

module.exports = mongoose.model('Building', buildingSchema);