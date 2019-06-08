const EventsService = require('./../../services/events');

function getAllEvents() {
    return EventsService.getAllEvents();
}

module.exports = {
    getAllEvents
}