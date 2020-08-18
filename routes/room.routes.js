const router = require('express').Router();
const roomController = require('../controllers/room.controller');

router.post('/rooms', roomController.addRoom);
router.get('/rooms', roomController.getAllRooms);
router.get('/rooms/:id', roomController.viewRoom);
router.put('/rooms/:id', roomController.updateRoom);
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
