const express = require('express');
const { Router } = require('express');
const routes = new Router();

routes.get('/', (req, res)=> {
    return res.status(200).send('<h1>Hello World</h1>');
});

app = express();

app.use(routes);
app.listen(8080)