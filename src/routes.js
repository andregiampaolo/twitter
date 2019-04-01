const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    return res.send('Hello World!');
});

modules.exports = routes;