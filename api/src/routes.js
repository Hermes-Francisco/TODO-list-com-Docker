const { Router } = require('express');
const HelloController = require('./controllers/HelloController');

const routes = new Router();

routes.get('/', HelloController.hello);

module.exports = routes;
