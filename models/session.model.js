const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({

    lecName : { type : String, required : true },
    subName : { type : String, required :true },
    subCode : { type: String, required : true },
    tag : { type : String, required : true },
    groupId : { type : String, required : true },
    subGroupId : { type : String, required : true },
    studentCount : { type : Number, required : true },
    duration : { type : Number, required : true }

});

module.exports = mongoose.model('session', sessionSchema);