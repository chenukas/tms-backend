const router = require('express').Router();
const roomController = require('../controllers/room.controller');

router.post('/buildings/:id/rooms', roomController.addRoomToBuilding);
router.get('/rooms', roomController.getAllRooms);
router.get('/rooms/:id', roomController.viewRoom);
router.put('/rooms/:id', roomController.updateRoom);
router.delete('/rooms/:id', roomController.deleteRoom);
router.put('/rooms/:id/tags', roomController.updateTags);

module.exports = router;
