const router = require('express').Router();
const tagController = require('../controllers/tag.controller');

router.post('/tags', tagController.createTag);
router.get('/tags', tagController.viewTags);
router.get('/tags/:id', tagController.viewTagById);
router.put('/tags/:id', tagController.updateTagById);
router.delete('/tags/:id', tagController.deleteTagById);

module.exports = router;