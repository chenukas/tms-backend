const tagsRouter = require('./tag.routes');
const worksRouter = require('./work.routes');
const lecturersRouter = require('./lecturer.routes');

const init = app => {


    app.use(tagsRouter);
    app.use(worksRouter);
    app.use(lecturersRouter);
    

};

module.exports = init;