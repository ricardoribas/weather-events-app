const FIlterDecorator = require('./../../decorators/filter');
const ScheduledEvent = require('./../../../models/ScheduledEvent');

function getAllEvents(filterParams, callback) {
    const filter = FIlterDecorator
        .withDate(filterParams.date)
        .withLocation(filterParams.location)
        .get();

    ScheduledEvent.find(
            filter,
            callback
        ).limit(filter.limit);
}

function createEvent(newEvent, callback) {
    ScheduledEvent.create(newEvent, callback);
}

module.exports = {
    getAllEvents,
    createEvent
}