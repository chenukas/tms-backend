const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({

    selectedLecturer : { type : String, required : true },
    selectedSubject : { type : String, required :true },
    subCode : { type : String, required : true },
    selectedTag : { type : String, required : true },
    selectedMainGroup : { type : String, required : true },
    selectedSubGroup : { type : String, required : true },
    selectedBatch : { type : String, required : true },
    studentCount : { type : Number, required : true },
    duration : { type : Number, required : true }

});

module.exports = mongoose.model('session', sessionSchema);