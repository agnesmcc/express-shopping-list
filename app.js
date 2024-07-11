const express = require('express');
const items = require('./fakeDb');

const app = express();

app.use(express.json());

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});