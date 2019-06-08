const config = require('./../../../config')();
const { PLACEHOLDER_LOCATION } = require('./../../constants');
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
    debugger;

    const controllerHandler = (forecast = {}) =>
        EventsService
            .createEvent(newEvent)
            .then((createdEvent) => {
                res.json(createdEvent);
            })
            .catch(err => {
                req.err(err);
            });

    if (newEvent.location) {
        fetch(config.mapBoxApi.replace(PLACEHOLDER_LOCATION, encodeURIComponent(newEvent.location)))
            .then(() => {
                if (results.features) {
                    const [latitude, longitude] = results.features[0].geometry.coordinates; 

                    return fetch(`${config.darkSkyApi}${latitude},${longitude}`)
                        .then((forecast) => controllerHandler(forecast));
                } else {
                    reject(new Error('no_geocoding_results'));
                }
            })
            .catch((error) => {
                return controllerHandler();
            })
    } else {
        return controllerHandler();
    }
}

module.exports = {
    getAllEvents,
    createEvent
}