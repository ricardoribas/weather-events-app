const EventsService = require('./../../services/event');

async function updateEvent(req, res) {
    const $event = req.body;

    EventsService
        .updateEvent($event)
        .then((updatedEvent) => {
            res.json(updatedEvent);
        })
        .catch(err => {
            res.error(err);
        });
}

async function deleteEvent(req, res) {
    const eventId = req.params.id;

    EventsService
        .deleteEvent(eventId)
        .then(() => {
            res.json({});
        })
        .catch(err => {
            res.error(err);
        });
}

module.exports = {
    updateEvent,
    deleteEvent
}