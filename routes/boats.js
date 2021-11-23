const express = require('express');
const router = express.Router();

const boats = require('../data/boats.json');

router.get('/', (req, res) => {
    res.send(boats);
})

router.get('/:id', (req, res) => {
    let found = boats.find(item => item.id == req.params.id);
    if (found) {
        res.send(found);
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;
