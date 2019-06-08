const EventsController = require('./../controllers/events');

module.exports = (router) => {
  router
    .route('/')
    .get(EventsController.getAllEvents)

  return router;
};
