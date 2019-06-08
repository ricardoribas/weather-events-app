const ScheduledEvent = require('../../../models/ScheduledEvent');

function createEvent(newEvent, callback) {
    ScheduledEvent.create(newEvent, callback);
}

function updateEvent($event, callback) {
    ScheduledEvent.findByIdAndUpdate($event._id, $event, { new: true }, callback);
}

function deleteEvent(eventId, callback) {
    ScheduledEvent.findByIdAndRemove({
        _id: eventId
    }, callback);
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent
}