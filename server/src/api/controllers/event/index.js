const EventsService = require('./../../services/events');

async function getEvent(req, res) {
    const eventId = req.query.id;

    EventsService
        .createEvent(newEvent)
        .then((createdEvent) => {
            res.json(createdEvent);
        })
        .catch(err => {
            res.err(err);
        });
}

async function updateEvent(req, res) {
    const $event = req.body;

    EventsService
        .createEvent($event)
        .then((updatedEvent) => {
            res.json(updatedEvent);
        })
        .catch(err => {
            res.err(err);
        });
}

async function deleteEvent(req, res) {
    const eventId = req.query.id;

    EventsService
        .deleteEvent(eventId)
        .then(() => {
            res.json({});
        })
        .catch(err => {
            res.err(err);
        });
}

module.exports = {
    getEvent,
    updateEvent,
    deleteEvent
}