const router = require('express').Router();
const subjectController = require('../controllers/subject.controller');

router.post('/subjects', subjectController.addSubject);
router.get('/subjects', subjectController.viewSubjects);
router.get('/subjects/:id', subjectController.viewSubjectById);
router.put('/subjects/:id', subjectController.updateSubjectById);
router.delete('/subjects/:id', subjectController.deleteSubjectById);
router.put('/subjects/:id/parallel', subjectController.updateSubjectParallelById);
router.get('/fsubjects', subjectController.viewFourthYearSubjects);

module.exports = router;