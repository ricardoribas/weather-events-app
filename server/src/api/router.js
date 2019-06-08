const EventController = require('./controllers/event');
const EventsController = require('./controllers/events');

module.exports = (router) => {
    router
        .route('/events')
        .get(EventsController.getAllEvents)
        .post(EventsController.createEvent);

    router
        .route('/events/:id')
        .put(EventController.updateEvent)
        .delete(EventController.deleteEvent);

    return router;
}