const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/list', UserController.list);
routes.get('/signin', UserController.signUp);
routes.post('/login', UserController.login);

module.exports = routes;