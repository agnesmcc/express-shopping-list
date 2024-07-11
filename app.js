const express = require('express');
const items = require('./fakeDb');

const app = express();


app.get('/items', (req, res) => {
    res.json(items);
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});