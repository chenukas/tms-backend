const router = require('express').Router();
const slotsAndSessionController = require('../controllers/slotsAndSession.controller');

router.post('/slots', slotsAndSessionController.createSlotsAndSession);
router.get('/slots', slotsAndSessionController.viewSlotsAndSession);
router.delete('/slots/:id', slotsAndSessionController.deleteSlotsAndSession);

module.exports = router;