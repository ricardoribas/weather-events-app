const EventsService = require('./../../services/events');

async function getAllEvents(req, res) {
    const filterParams = req.query;

    EventsService
        .getAllEvents(filterParams)
        .then((events) => {
            res.json(events);
        })
        .catch(err => {
            req.err(err);
        })
}

async function createEvent(req, res) {
    const newEvent = req.body;

    EventsService
        .createEvent(newEvent)
        .then((createdEvent) => {
            res.json(createdEvent);
        })
        .catch(err => {
            req.err(err);
        });
}

module.exports = {
    getAllEvents,
    createEvent
}