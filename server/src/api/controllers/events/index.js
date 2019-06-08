const EventsService = require('./../../services/events');

async function getAllEvents(req, res) {
    const filterParams = req.query;

    EventsService
        .getAllEvents(filterParams)
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