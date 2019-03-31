const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://twitter-user:58C22bb794uZ78V@cluster0-pnv1w.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    return res.send('Hello world.');
});

app.listen(3000,() => {
    console.log('Server started on port 3000');
});