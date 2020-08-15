const Tag = require('../models/tag.model');

const createTag = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Tag name is undefined"
        });
    }

    const tag = new Tag(req.body);
    //console.log(tag);

    tag.save().then(result => {
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

const viewTags = (req, res) => {
    Tag.find({}).then(result => {
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

const viewTagById = (req, res) => {
    Tag.findById(req.params.id).then(result => {
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

const updateTagById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Tag name is undefined"
        });
    }

    Tag.findByIdAndUpdate(req.params.id,{
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

const deleteTagById = (req, res) => {
    Tag.findByIdAndDelete(req.params.id).then(result => {
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
    createTag,
    viewTags,
    viewTagById,
    updateTagById,
    deleteTagById
}
