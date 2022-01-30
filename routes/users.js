const express = require('express');
const router = express.Router();

let users = require('../data/users.json');

router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res) => {
    let found = users.find(item => item.id == req.params.id);
    if (found) {
        res.send(found);
    } else {
        res.sendStatus(404);
    }
})

router.delete('/:id', (req, res) => {
    let found = users.find(item => item.id == req.params.id);
    if (found) {
        boats = users.filter(item => item.id != req.params.id);
        res.end();
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;
