const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);


routes.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    return res.send('Hello World!');
});


module.exports = routes;