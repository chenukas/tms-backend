const tagsRouter = require('./tag.routes');
const worksRouter = require('./work.routes');

const init = app => {


    app.use(tagsRouter);
    app.use(worksRouter);

};

module.exports = init;