const router = require('express').Router();
const consecutiveSessionController = require('../controllers/consecutiveSession.controller');

router.post('/csessions', consecutiveSessionController.createConsecutiveSession);

module.exports = router;