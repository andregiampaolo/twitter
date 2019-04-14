const express = require('express');

const routes = express.Router();

const TweetController = require('../controllers/TweetController');
const LikeController = require('../controllers/LikeController');

routes.get('/list', TweetController.list);
routes.post('/create', TweetController.create);
routes.post('/like/:id', LikeController.store);

routes.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    return res.send('Hello World!');
});

module.exports = routes;