const ScheduledEvent = require('../../../models/ScheduledEvent');

function createEvent(newEvent, callback) {
    ScheduledEvent.create(newEvent, callback);
}

function getEvent(eventId, callback) {
    ScheduledEvent.findById(eventId, callback);
}

function updateEvent($event, callback) {
    ScheduledEvent.update({
        _id: $event.id
    }, $event, callback);
}

function deleteEvent(eventId, callback) {
    ScheduledEvent.remove({
        _id: eventId
    }, callback);
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}