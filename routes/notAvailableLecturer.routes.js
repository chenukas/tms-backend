const router = require('express').Router();
const notAvailableLecturerController = require('../controllers/notAvailableLecturer.controller');

router.post('/nalecturer', notAvailableLecturerController.createNotAvailableLecturer);

module.exports = router;