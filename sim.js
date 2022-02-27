const geolib = require('geolib');

const Boat = require('./model/boat.js').Boat;
const boatsData = require('./data/boats.json');
let boats = boatsData.map(boat => new Boat(boat));
let isRunning = false;
let targetPoint = {};

function setRunning(running) {
    isRunning = running;
}

function setTarget(target) {
    if (geolib.isValidCoordinate(target)) {
        targetPoint = target;
    }
}

function getTarget() {
    return targetPoint;
}

function simStep() {
    if (isRunning && targetPoint) {
        boats.forEach(boat => {
            boat.update(targetPoint);
        });
    } else {
        boats.forEach(boat => {
            boat.stop();
        });
    }
}

module.exports = {
    setRunning,
    setTarget,
    getTarget,
    simStep,
    boats
}
