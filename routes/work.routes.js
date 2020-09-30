const router = require('express').Router();
const workController = require('../controllers/work.controller');

router.post('/works', workController.createWork);
router.get('/works', workController.viewWork);
router.get('/works/:id', workController.viewWorkById);
router.put('/works/:id', workController.updateWork);
router.delete('/works/:id', workController.deleteWork);
router.post('/worksTimeTable', workController.viewWorkByTimeID);

module.exports = router;
