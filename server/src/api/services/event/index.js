const EventsRepository = require('./../../repository/event');

function getEvent(eventId) {
    return new Promise(function(resolve, reject) {
        EventsRepository.getEvent(eventId, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
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

function updateEvent($event) {
    return new Promise(function(resolve, reject) {
        EventsRepository.updateEvent(newEvent, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function deleteEvent(eventId) {
    return new Promise(function(resolve, reject) {
        EventsRepository.deleteEvent(eventId, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}