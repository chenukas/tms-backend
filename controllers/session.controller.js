const Session = require("../models/session.model");

const addSession = (req, res) => {
  //Adding session
  const session = new Session(req.body);

  session
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const viewSessions = (req, res) => {
  Session.find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(501).json({
        success: false,
        data: err.message,
      });
    });
};

const viewSessionsById = (req, res) => {
  Session.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(501).json({
        success: false,
        data: err.message,
      });
    });
};

const updateSessionById = (req, res) => {
  if (!req.body.lecName) {
    return res.status(400).json({
      success: false,
      message: "Lecture name is undefined",
    });
  }

  if (!req.body.subName) {
    return res.status(400).json({
      success: false,
      message: "Subject Name is undefined",
    });
  }

  Session.findByIdAndUpdate(
    req.params.id,
    {
      selectedLecturer: req.body.selectedLecturer,
      selectedSubject: req.body.selectedSubject,
      selectedTag: req.body.selectedTag,
      selectedGroup: req.body.selectedGroup,
      //selectedBatch: req.body.selectedBatch,
      studentCount: req.body.studentCount,
      duration: req.body.duration,
    },
    { new: true }
  )
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(503).json({
        success: false,
        message: err.message,
      });
    });
};

const deleteSessionById = (req, res) => {
  Session.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(504).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  addSession,
  viewSessions,
  viewSessionsById,
  updateSessionById,
  deleteSessionById,
};
