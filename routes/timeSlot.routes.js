const router = require('express').Router();
const timeSlotController = require('../controllers/timeSlot.controller');

router.post('/timeSlots', timeSlotController.createTimeSlot);

module.exports = router;