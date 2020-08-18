const router = require('express').Router();
const buildingController = require('../controllers/building.controller.js');

router.post('/buildings', buildingController.addBuilding);
router.get('/buildings', buildingController.getAllBuildings);
router.get('/buildings/:id', buildingController.viewBuilding);

module.exports = router;
