const EventsService = require('./../../services/events');

async function getAllEvents(req, res) {
    EventsController
        .getAllEvents()
        .then((events) => {
            res.json(events);
        })
        .catch(err => {
            res.err(err);
        })
}

module.exports = {
    getAllEvents
}