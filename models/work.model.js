const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    timeTableID: {
      type: String,
      required: true 
    },
    timeTableType: {
      type: String,
      required: true 
    },
    noOfWorkingDays: {
      type: Number,
      required: true
    },
    noOfHours: {
      type: Number,
        required: true
    },
    noOfMinutes: {
      type: Number,
        required: true
    },
    workingDays: {
      type: String,
        required: true
    }
  },{
  timestamps: true
});

module.exports = mongoose.model('work', workSchema);
