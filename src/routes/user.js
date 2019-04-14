const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/list', UserController.list);
routes.get('/signin', UserController.signUp);

module.exports = routes;