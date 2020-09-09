const router = require('express').Router();
const batchController = require('../controllers/batch.controller');

router.post('/batches', batchController.createBatch);
router.get('/batches', batchController.viewBatches);
router.get('/batches/maingroups', batchController.viewMainGroups);
router.get('/batches/subgroups', batchController.viewSubGroups);
router.get('/batches/:id', batchController.viewBatchById);
router.put('/batches/:id', batchController.updateBatchById);
router.delete('/batches/:id', batchController.deleteBatchById);

module.exports = router;