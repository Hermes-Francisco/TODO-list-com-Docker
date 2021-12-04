const { Router } = require('express');
const HelloController = require('./controllers/HelloController');
const TaskController = require('./controllers/TaskController');

const routes = new Router();

routes.get('/', HelloController.hello);
routes.post('/task', TaskController.create);
routes.get('/task', TaskController.index);
routes.get('/task/:id', TaskController.show);
routes.put('/task/:id', TaskController.update);
routes.delete('/task/:id', TaskController.delete);

module.exports = routes;
