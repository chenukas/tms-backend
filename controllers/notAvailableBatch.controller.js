const NotAvailableBatch = require('../models/notAvailableBatch.model');

const createNotAvailableBatch = (req, res) => {

    const notavailablebatch = new NotAvailableBatch(req.body);

    notavailablebatch.save().then(result => {
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

module.exports = {
    createNotAvailableBatch
}