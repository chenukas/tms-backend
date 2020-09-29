const router = require("express").Router();
const sessionController = require("../controllers/session.controller");

router.post("/sessions", sessionController.addSession);
router.get("/sessions", sessionController.viewSessions);
router.get("/sessions/:id", sessionController.viewSessionsById);
router.put("/sessions/:id", sessionController.updateSessionById);
router.delete("/sessions/:id", sessionController.deleteSessionById);
router.get("/lsessions", sessionController.viewLectureSessions);
router.get("/tsessions", sessionController.viewTutorialSessions);

module.exports = router;
