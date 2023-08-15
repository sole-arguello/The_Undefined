const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const courseRoutes = require('./courseRoutes');
const userRoutes = require('./user');
const coursesDetailRoutes = require('./courseDetail');
// use=
app.use('/coursesDetail', coursesDetailRoutes);
app.use('/courses', courseRoutes);
app.use('/user', userRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
