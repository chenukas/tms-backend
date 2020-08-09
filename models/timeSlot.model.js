const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    timeTableID: {
        type: String,
        required: true
      },
    timeTableType: {
        type: String,
        required: true
    },
    timeSlots: {
        type: Array,
        required: true
    }
},{
  timestamps: true
});

module.exports = mongoose.model('timeSlot', timeSlotSchema);