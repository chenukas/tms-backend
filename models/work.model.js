const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    timeTableType: {
      type: String,
      required: true
    },
  noOfWorkingDays: {
    type: Number,
    required: true
  },
  workingDays: {
    type: Array,
    required: true
  },
  workingTime: [{
    hours: {
      type: Number,
      required: true
    },
    minutes: {
      type: Number,
      required: true
    }
  }]
},{
  timestamps: true
});

module.exports = mongoose.model('work', workSchema);