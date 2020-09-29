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
const statisticsController = require('../controllers/statistics.controller');
const sessionsRouter = require('./session.routes');
const notAvailableBatchRouter = require('./notAvailableBatch.routes');
const notAvailableLecturerRouter = require('./notAvailableLecturer.routes');
const notAvailableSessionRouter = require('./notAvailableSession.routes');
const slotsAndSessionRouter = require('./slotsAndSession.routes');

const consecutiveSessionRouter = require('./consecutiveSession.routes');

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
    app.use(sessionsRouter);
    app.use(notAvailableBatchRouter);
    app.use(notAvailableLecturerRouter);
    app.use(notAvailableSessionRouter);
    app.use(slotsAndSessionRouter);
    app.use(consecutiveSessionRouter);

    app.get('/statistics', statisticsController.getStatistics);
};

module.exports = init;
