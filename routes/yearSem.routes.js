const router = require('express').Router();
const yearSemController = require('../controllers/yearSem.controller');

router.post('/yearsems', yearSemController.createYearSem);
router.get('/yearsems', yearSemController.viewYearSems);
router.get('/yearsems/:id', yearSemController.viewYearSemById);
router.put('/yearsems/:id', yearSemController.updateYearSemById);
router.delete('/yearsems/:id', yearSemController.deleteYearSemById);

module.exports = router;