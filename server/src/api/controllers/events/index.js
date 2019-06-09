const config = require('./../../../config')();
const fetch = require('node-fetch');

const EventsService = require('./../../services/events');
const EventDecorator = require('./../../decorators/event');
const { PLACEHOLDER_LOCATION } = require('./../../constants');

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

    const controllerHandler = (forecast) => {
        const transformedEvent = EventDecorator
            .from(newEvent)
            .withForecast(forecast)
            .get();


        return EventsService
            .createEvent(transformedEvent)
            .then((createdEvent) => {
                res.json(createdEvent);
            })
            .catch(err => {
                req.err(err);
            });
    }

    if (newEvent.location) {
        fetch(config.mapBoxApi.replace(PLACEHOLDER_LOCATION, encodeURIComponent(newEvent.location)))
            .then(response => response.json())
            .then((results) => {
                if (results.features) {
                    const [longitude, latitude] = results.features[0].geometry.coordinates; 
                    const unitsCelsius = 'units=si';

                    return fetch(`${config.darkSkyApi}${latitude},${longitude}?${unitsCelsius}`)
                        .then(response => response.json())
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