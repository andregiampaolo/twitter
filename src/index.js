const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://twitter-user:58C22bb794uZ78V@cluster0-pnv1w.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());
app.use(express.json());

//routes
app.use('/tweet',require('./routes/tweet'));
app.use('/user',require('./routes/user'));

server.listen(3000,() => {
    console.log('Server started on port 3000');
});