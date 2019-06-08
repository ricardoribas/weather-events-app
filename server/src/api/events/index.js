const EventsController = require('../controllers/events');

module.exports = (router) => {
  router.get('/api/events', async (req, res) => {
    EventsController
      .getAllEvents()
      .then((events) => {
        res.json(events);
      })
      .catch(err => {
        throw err;
      })
  });
};
