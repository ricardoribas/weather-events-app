/* eslint-disable no-console */
module.exports = (router) => {
  router.get('/api/events', async (req, res) => {
    res.send("getting events");
  });
};
