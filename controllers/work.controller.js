const Work = require('../models/work.model');

// create new working days and hours
const createWork = (req, res) => {

  if(!req.body.timeTableID) {
    return res.status(400).json({
      success: false,
      message: "Time Table ID is undefined"
    });
  }
  if(!req.body.timeTableType) {
    return res.status(400).json({
      success: false,
      message: "Time Table type is undefined"
    });
  }
  if(!req.body.noOfWorkingDays) {
    return res.status(400).json({
      success: false,
      message: "No of working days is undefined"
    });
  }
    if(!req.body.noOfHours) {
        return res.status(400).json({
            success: false,
            message: "No of Hours is undefined"
        });
    }
    if(!req.body.workingDays) {
        return res.status(400).json({
            success: false,
            message: "working days is undefined"
        });
    }

  work = new Work(req.body);

    work.save().then(result => {
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

//view working days and hours
const viewWork = (req, res) => {
  Work.find({},(err, works) =>{
      res.json(works)
  }).catch(err => {
      res.status(501).json({
          success: false,
          message: err.message
      });
  });
};

//view the working days and hours by using ID
const viewWorkById = (req, res) => {
    Work.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result,
            message: "Searching ID is found."
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

  if(!req.body.timeTableID) {
    return res.status(400).json({
      success: false,
      message: "Time Table ID is undefined"
    });
  }
  if(!req.body.timeTableType) {
    return res.status(400).json({
      success: false,
      message: "Time Table type is undefined"
    });
  }
  if(!req.body.noOfWorkingDays) {
    return res.status(400).json({
      success: false,
      message: "No of working days is undefined"
    });
  }

  Work.findByIdAndUpdate(req.params.id,{
      timeTableID: req.body.timeTableID,
      timeTableType: req.body.timeTableType,
      noOfWorkingDays: req.body.noOfWorkingDays,
      workingDays: req.body.workingDays,
      noOfHours: req.body.noOfHours,
      noOfMinutes: req.body.noOfMinutes

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

const viewWorkByTimeID = (req, res) => {

  if(!req.body.timeTableID) {
    return res.status(400).json({
      success: false,
      message: "Time Table ID is undefined"
    });
  }

  const timeTableID = req.body.timeTableID;
  let work;
  
  Work.find({
    timeTableID: timeTableID
    },(err, works) =>{
    if (err){
      console.log('err 2:', err);
      return res.send({
          success: false,
          message: 'Error: Server error'
      });
    }
    
    work = works[0];
    
    Work.findById(work._id).then(result => {
      res.status(200).json({
          success: true,
          data: result,
          message: "Searching ID is found."
      });
    })
  });

};

module.exports = {
  createWork,
  viewWork,
  updateWork,
  deleteWork,
  viewWorkById,
  viewWorkByTimeID
}
