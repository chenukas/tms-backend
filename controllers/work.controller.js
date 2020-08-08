const Work = require('../models/work.model');

// create new working days and hours
const createWork = (req, res) => {

  if(!req.body.timeTableType) {
    return res.status(400).json({
      success: false,
      message: "Time Table name is undefined"
    });
  }
  if(!req.body.noOfWorkingDays) {
    return res.status(400).json({
      success: false,
      message: "No of working days is undefined"
    });
  }
  if(!req.body.workingDays) {
    return res.status(400).json({
      success: false,
      message: "working days is undefined"
    });
  }
  if(!req.body.workingTime) {
    return res.status(400).json({
      success: false,
      message: "working time is undefined"
    });
  }

  const work = new Work(req.body);

  work.save().then(result => {
    res.status(200).json({
      success: true,
      data: result,
      message: "Successfully Added."
    });
  }).catch(err => {
    res.status(500).json({
      success: false,
      message: err.message
    });
  });
};

//view working days and hours
const viewWork = (req, res) => {
  Work.find({}).then(result => {
      res.status(200).json({
          success: true,
          data: result
      });
  }).catch(err => {
      res.status(501).json({
          success: false,
          message: err.message
      });
  });
};

//edit working days and hours by using workID
const updateWork = (req, res) => {

  if(!req.body.timeTableType) {
    return res.status(400).json({
      success: false,
      message: "Time Table name is undefined"
    });
  }
  if(!req.body.noOfWorkingDays) {
    return res.status(400).json({
      success: false,
      message: "No of working days is undefined"
    });
  }
  if(!req.body.workingDays) {
    return res.status(400).json({
      success: false,
      message: "working days is undefined"
    });
  }
  if(!req.body.workingTime) {
    return res.status(400).json({
      success: false,
      message: "working time is undefined"
    });
  }

  Work.findByIdAndUpdate(req.params.id,{
      timeTableType: req.body.timeTableType,
      noOfWorkingDays: req.body.noOfWorkingDays,
      workingDays: req.body.workingDays,
      workingTime: req.body.workingTime
  }, {new: true}).then(result => {
      res.status(200).json({
          success: true,
          data: result,
          message: "Successfully Updated."
      });
  }).catch(err => {
      res.status(501).json({
          success: false,
          message: err.message
      });
  });
};

//delete working days and hours by using workID
const deleteWork = (req, res) => {
  Work.findByIdAndDelete(req.params.id).then(result => {
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
  createWork,
  viewWork,
  updateWork,
  deleteWork
}