const router = require('express').Router();
const sessionController = require('../controllers/session.controller');

router.post('/sessions', sessionController.addSession);
router.get('/sessions', sessionController.viewSessions);
router.get('/sessions/:id', sessionController.viewSessionsById);
router.put('/sessions/:id', sessionController.updateSessionById);
router.delete('/sessions/:id', sessionController.deleteSessionById);

module.exports = router;