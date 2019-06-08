const EventsController = require('./../controllers/events');

module.exports = (router) => {
  router
    .route('/')
    .get(EventsController.getAllEvents)
    .post(EventsController.createEvent)
    .put(EventsController.updateEvent)
    .delete(EventsController.deleteEvent);

  return router;
};
