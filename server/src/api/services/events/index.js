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

module.exports = {
    getAllEvents
}