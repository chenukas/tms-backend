const router = require('express').Router();
const timeSlotController = require('../controllers/timeSlot.controller');

router.post('/timeSlots', timeSlotController.createTimeSlot);
router.post('/timeSlotsTimeTable', timeSlotController.viewTimeSlotsByTimeID);

module.exports = router;