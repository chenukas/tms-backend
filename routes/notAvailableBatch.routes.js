const router = require('express').Router();
const notAvailableBatchController = require('../controllers/notAvailableBatch.controller');

router.post('/nabatch', notAvailableBatchController.createNotAvailableBatch);

module.exports = router;