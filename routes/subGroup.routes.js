const router = require('express').Router();
const subGroupController = require('../controllers/subGroup.controller');

router.post('/subgroups', subGroupController.createSubGroup);
router.get('/subgroups', subGroupController.viewSubGroups);
router.get('/subgroups/:id', subGroupController.viewSubGroupById);
router.put('/subgroups/:id', subGroupController.updateSubGroupById);
router.delete('/subgroups/:id', subGroupController.deleteSubGroupById);

module.exports = router;