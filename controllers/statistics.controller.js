const groupModel = require("../models/group.model");
const lecturerModel = require("../models/lecturer.model");
const subjectModel = require("../models/subject.model");
const roomModel = require('../models/room.model');

const getStatistics = async (req, res) => {
    try {
        const groupCount = await groupModel.count();
        const lecturerCount = await lecturerModel.count();
        const subjectCount = await subjectModel.count();
        const roomsCount = await roomModel.count();

        return res.status(200).json({
            success: true, data: {groupCount, lecturerCount, subjectCount, roomsCount }
        });
    } catch (err) {
        return res.status(500).json({
            success: false, error: err.message
        });
    }
};

module.exports = {
    getStatistics
}