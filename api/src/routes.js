const { Router } = require('express');
const HelloController = require('./controllers/HelloController');
const TaskController = require('./controllers/TaskController');

const routes = new Router();

routes.get('/', HelloController.hello);
routes.post('/', TaskController.create);

module.exports = routes;
