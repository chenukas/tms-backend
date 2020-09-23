const router = require('express').Router();
const notAvailableSessionController = require('../controllers/notAvailableSession.controller');

router.post('/nasession', notAvailableSessionController.createNotAvailableSession);

module.exports = router;