const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new mongoose.Schema({
  selectedLecturer: { type: Schema.Types.ObjectId, ref: "lecturer" },
  selectedSubject: { type: Schema.Types.ObjectId, ref: "subject" },
  selectedTag: { type: String },
  selectedGroup: { type: Schema.Types.ObjectId, ref: "batch" },
  studentCount: { type: String },
  duration: { type: String },

  suitable_rooms: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
  ]

}, {timestamps: true});

module.exports = mongoose.model("session", sessionSchema);
