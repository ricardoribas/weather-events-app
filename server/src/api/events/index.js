const EventsController = require('../controllers/events');

module.exports = (router) => {
  router.get('/', EventsController.getAllEvents);

  return router;
};
