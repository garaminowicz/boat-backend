const express = require('express');
const router = express.Router();

const toDto = require('../model/boat.js').toDto;
const boats = require('../sim.js').boats;

router.get('/', (req, res) => {
    res.send(boats.map(boat => toDto(boat)));
})

router.get('/:id', (req, res) => {
    let found = boats.find(item => item.id == req.params.id);
    if (found) {
        res.send(toDto(found));
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;
