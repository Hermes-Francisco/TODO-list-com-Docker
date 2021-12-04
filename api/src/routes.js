const { Router } = require('express');
const HelloController = require('./controllers/HelloController');
const TaskController = require('./controllers/TaskController');

const routes = new Router();

routes.get('/', HelloController.hello);
routes.get('/task', TaskController.index);
routes.post('/task', TaskController.create);
routes.delete('/task/:id', TaskController.delete);

module.exports = routes;
