const ScheduledEvent = require('./../../../models/ScheduledEvent');

function getAllEvents(callback) {
    ScheduledEvent.find(callback).limit(20);
}

function createEvent(newEvent, callback) {
    ScheduledEvent.create(newEvent, callback);
}

module.exports = {
    getAllEvents,
    createEvent
}