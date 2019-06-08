const EventsRepository = require('./../../repository/event');

function updateEvent(newEvent) {
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
    updateEvent,
    deleteEvent
}