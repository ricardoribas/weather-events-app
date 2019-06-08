const EventsRepository = require('./../../repository/events');

function getAllEvents() {
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
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
}