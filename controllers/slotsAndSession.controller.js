const SlotsAndSession = require('../models/slotsAndSession.model');

const createSlotsAndSession = (req, res) => {

    if(!req.body.batchName) {
      return res.status(400).json({
        success: false,
        message: "Batch Name is undefined"
      });
    }
    if(!req.body.subjectCode) {
      return res.status(400).json({
        success: false,
        message: "Subject Code is undefined"
      });
    }
    if(!req.body.subjectName) {
      return res.status(400).json({
        success: false,
        message: "Subject Name is undefined"
      });
    }
      if(!req.body.tagName) {
          return res.status(400).json({
              success: false,
              message: "Tag Name is undefined"
          });
      }
      if(!req.body.lectureName) {
          return res.status(400).json({
              success: false,
              message: "Lecture Name is undefined"
          });
      }
      if(!req.body.classRoom) {
        return res.status(400).json({
            success: false,
            message: "ClassRoom is undefined"
        });
    }

    slotsAndSession = new SlotsAndSession(req.body);
  
    slotsAndSession.save().then(result => {
        res.status(200).json({
        success: true,
        data: result
      });
    }).catch(err => {
      res.status(500).json({
        success: false,
        message: err.message
      });
    });
  };

  const viewSlotsAndSession = (req, res) => {
    SlotsAndSession.find({},(err, works) =>{
        res.json(works)
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
  };

  const deleteSlotsAndSession = (req, res) => {
    SlotsAndSession.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result,
            message: "Successfully Deleted."
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
  };

  module.exports = {
    createSlotsAndSession,
    viewSlotsAndSession,
    deleteSlotsAndSession
}