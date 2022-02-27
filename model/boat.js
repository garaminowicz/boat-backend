const geolib = require('geolib');

function normalizeAngle(angle) {
    return (angle + 360) % 360;
}

class Boat {
    constructor(boat) {
        this.id = boat.id;
        this.position = { latitude: boat.latitude, longitude: boat.longitude };
        this.heading = boat.heading;
        this.speed = 0;
    }

    update(targetPoint) {
        let targetHeading = geolib.getRhumbLineBearing(this.position, targetPoint);
        let headingDiff = normalizeAngle(targetHeading - this.heading);
        let turn = headingDiff < 180 ? 2 : -2;
        this.heading = normalizeAngle(this.heading + turn);
        this.speed = 100;
        this.position = geolib.computeDestinationPoint(this.position, this.speed, this.heading);
    };

    stop() {
        this.speed = 0;
    }
}

function toDto(boat) {
    return {
        id: boat.id,
        latitude: boat.position.latitude,
        longitude: boat.position.longitude,
        heading: boat.heading,
        speed: boat.speed
    }
}

module.exports = {
    Boat,
    toDto
}
