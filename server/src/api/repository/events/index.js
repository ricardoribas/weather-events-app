const ScheduledEvent = require('./../../../models/ScheduledEvent');

function getAllEvents(callback) {
    ScheduledEvent.find(callback).limit(20);
}

function createEvent(newEvent, callback) {
    ScheduledEvent.create(newEvent, callback);
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
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
}