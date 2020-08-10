const tagsRouter = require('./tag.routes');
const worksRouter = require('./work.routes');
const groupsRouter = require('./group.routes');
const programmesRouter = require('./programme.routes');
const subGroupsRouter = require('./subGroup.routes');
const yearSemsRouter = require('./yearSem.routes');

const init = app => {


    app.use(tagsRouter);
    app.use(worksRouter);
    app.use(groupsRouter);
    app.use(programmesRouter);
    app.use(subGroupsRouter);
    app.use(yearSemsRouter);

};

module.exports = init;