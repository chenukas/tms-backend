const router = require('express').Router();
const lecturerController = require('../controllers/lecturer.controller');

router.post('/lecturers', lecturerController.addLecturer);
router.get('/lecturers', lecturerController.viewLecturers);
router.get('/lecturers/:id', lecturerController.viewLecturersById);
router.put('/lecturers/:id', lecturerController.updateLecturerById);
router.delete('/lecturers/:id', lecturerController.deleteLecturerById);

router.put('/lecturers/:id/suitable_rooms', lecturerController.updateSuitableRooms);

module.exports = router;