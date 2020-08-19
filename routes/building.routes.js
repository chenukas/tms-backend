const router = require('express').Router();
const buildingController = require('../controllers/building.controller');

router.post('/buildings', buildingController.addBuilding);
router.get('/buildings', buildingController.getAllBuildings);
router.get('/buildings/:id', buildingController.viewBuildingById);
router.put('/buildings/:id', buildingController.updateBuilding);
router.delete('/buildings/:id', buildingController.deleteBuilding);

module.exports = router;
