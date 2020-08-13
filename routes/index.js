const tagsRouter = require('./tag.routes');
const worksRouter = require('./work.routes');
const timeSlotsRouter = require('./timeSlot.routes');

const init = app => {

    app.use(tagsRouter);
    app.use(worksRouter);
    app.use(timeSlotsRouter);

};

module.exports = init;
