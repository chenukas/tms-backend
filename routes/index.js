const tagsRouter = require('./tag.routes');

const init = app => {


    app.use(tagsRouter);

};

module.exports = init;