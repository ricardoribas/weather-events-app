const ScheduledEvent = require('./../../../models/ScheduledEvent');

function getAllEvents(callback) {
    ScheduledEvent.find(callback).limit(20);
}

module.exports = {
    getAllEvents
}