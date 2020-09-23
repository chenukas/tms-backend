const { model } = require('mongoose');
const ConsecutiveSession = require('../models/consecutiveSession.model');

const createConsecutiveSession = (req, res) => {

    const consecutivesession = new ConsecutiveSession(req.body);

    consecutivesession.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
}

module.exports = {
    createConsecutiveSession
}