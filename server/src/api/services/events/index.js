const EventsRepository = require('./../../repository/events');

function getAllEvents(filterParams) {
    const { location, date } = filterParams;

    return new Promise(function(resolve, reject) {
        EventsRepository.getAllEvents((error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function createEvent(newEvent) {
    return new Promise(function(resolve, reject) {
        EventsRepository.createEvent(newEvent, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    getAllEvents,
    createEvent
}