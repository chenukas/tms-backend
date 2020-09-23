const NotAvailableLecturer = require('../models/notAvailableLecturer.model');

const createNotAvailableLecturer = (req, res) => {

    const notavailablelecturer = new NotAvailableLecturer(req.body);

    notavailablelecturer.save().then(result => {
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
    createNotAvailableLecturer
}