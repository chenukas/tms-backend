const Batch = require('../models/batch.model');

const createBatch = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Batch ID is undefined"
        });
    }

    const batch = new Batch(req.body);

    batch.save().then(result => {
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

const viewBatches = (req, res) => {
    Batch.find({}).then(result => {
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

const viewMainGroups = (req, res) => {
    Batch.find({type:'maingroup'}).then(result => {
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

const viewSubGroups = (req, res) => {
    Batch.find({type:'subgroup'}).then(result => {
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

const viewBatchById = (req, res) => {
    Batch.findById(req.params.id).then(result => {
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

const updateBatchById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Batch ID is undefined"
        });
    }

    Batch.findByIdAndUpdate(req.params.id,{
        name: req.body.name
    }, {new: true}).then(result => {
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

const deleteBatchById = (req, res) => {
    Batch.findByIdAndDelete(req.params.id).then(result => {
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

module.exports = {
    createBatch,
    viewBatches,
    viewMainGroups,
    viewSubGroups,
    viewBatchById,
    updateBatchById,
    deleteBatchById
}