const mongoose = require('mongoose');

const slotsAndSessionSchema = new mongoose.Schema({
    batchName: {
      type: String,
      required: true 
    },
    subjectCode: {
      type: String,
      required: true 
    },
    subjectName: {
      type: String,
      required: true
    },
    tagName: {
      type: String,
        required: true
    },
    lectureName: {
        type: String,
          required: true
      },
    classRoom: {
      type: String,
        required: true
    }
  });

module.exports = mongoose.model('slotsAndSession', slotsAndSessionSchema);