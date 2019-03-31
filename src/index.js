const express = require('express');

const app = express();


app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    return res.send('Hello world');
});

app.listen(3000,() => {
    console.log('Server started on port 3000');
});