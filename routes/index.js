const tagsRouter = require('./tag.routes');
const roomRouter = require('./room.routes');
const lecturersRouter = require('./lecturer.routes');
const groupsRouter = require('./group.routes');
const programmesRouter = require('./programme.routes');
const subGroupsRouter = require('./subGroup.routes');
const yearSemsRouter = require('./yearSem.routes');
const batchesRouter = require('./batch.routes');
const subjectsRouter = require('./subject.routes');
const timeSlotsRouter = require('./timeSlot.routes');
const worksRouter = require('./work.routes');
const buildingRouter = require('./building.routes');

const init = app => {

    app.use(tagsRouter);
    app.use(worksRouter);
    app.use(lecturersRouter);
    app.use(groupsRouter);
    app.use(programmesRouter);
    app.use(subGroupsRouter);
    app.use(yearSemsRouter);
    app.use(batchesRouter);
    app.use(subjectsRouter);
    app.use(timeSlotsRouter);
    app.use(buildingRouter);
    app.use(roomRouter);
};

module.exports = init;
