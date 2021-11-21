const express = require('express');
const { Router } = require('express');
const routes = new Router();

routes.get('/', (req, res) => {
    return res.status(200).json({message: "Hello World"});
})

app = express();
app.use(routes);

app.listen(3000)