const { Router } = require('express');
const HelloController = require('./controllers/HelloController');
const TaskController = require('./controllers/TaskController');

const routes = new Router();

routes.get('/', HelloController.hello);
routes.post('/task', TaskController.create);
routes.get('/task', TaskController.index);
routes.get('/task/:task', TaskController.show);
routes.put('/task/:task', TaskController.update);

module.exports = routes;
