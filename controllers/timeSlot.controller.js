const TimeSlots = require('../models/timeSlot.model');

// create new working days and hours
const createTimeSlot = (req, res) => {

    console.log("hello");

    if(!req.body.timeTableID) {
        return res.status(400).json({
          success: false,
          message: "Time Table ID is undefined"
        });
    }
    if(!req.body.timeTableType) {
        return res.status(400).json({
        success: false,
        message: "Time Table Type is undefined"
        });
    }
    if(!req.body.timeSlotsStartTimes) {
        return res.status(400).json({
        success: false,
        message: "Time Slots Start Times are undefined"
        });
    }
    if(!req.body.timeSlotsEndTimes) {
        return res.status(400).json({
            success: false,
            message: "Time Slots End Times are undefined"
        });
    }

    const timeSlots = new TimeSlots(req.body);

    timeSlots.save().then(result => {
        res.status(200).json({
        success: true,
        data: result,
        message: "Successfully Added."
        });
    }).catch(err => {
        res.status(500).json({
        success: false,
        message: err.message
        });
    });
};

module.exports = {
    createTimeSlot
}
