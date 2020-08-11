const router = require('express').Router();
const lecturerController = require('../controllers/lecturer.controller');

router.post('/lecturers', lecturerController.addLecturers);

module.exports = router;