const express = require("express");
const router = express.Router();
const items = require('./fakeDb');

router.get('/items', (req, res) => {
    res.json(items);
});

router.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json({"added": item});
});

router.get('/items/:name', (req, res) => {
    const name = req.params.name;
    const item = items.find(item => item.name === name);
    res.json(item);
});

router.patch('/items/:name', (req, res) => {
    const name = req.params.name;
    const item = items.find(item => item.name === name);
    Object.assign(item, req.body);
    res.json({"updated": item});
});

router.delete('/items/:name', (req, res) => {
    const name = req.params.name;
    const item = items.find(item => item.name === name);
    const index = items.indexOf(item);
    items.splice(index, 1);
    res.json({"message": "Deleted"});
});

module.exports = router;