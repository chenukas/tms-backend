const router = require('express').Router();
const programmeController = require('../controllers/programme.controller');

router.post('/programmes', programmeController.createProgramme);
router.get('/programmes', programmeController.viewProgrammes);
router.get('/programmes/:id', programmeController.viewProgrammeById);
router.put('/programmes/:id', programmeController.updateProgrammeById);
router.delete('/programmes/:id', programmeController.deleteProgrammeById);

module.exports = router;