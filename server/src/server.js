/* eslint-disable no-console */
const express = require('express');
const config = require('./config')();

const headersMiddleware = require('./api/middleware/headers');
const requestMiddleware = require('./api/middleware/request');

if (!config) {
  process.exit(1);
}

const app = express();
const router = express.Router();

app.use(headersMiddleware);
router.use(requestMiddleware);

router.get('/', (req, res) => {
  res.send('Welcome to Ogun api');
});

require('./api/events')(router);

app.use('/', router);

app.listen(config.port, () => {
  console.log(`Node server listening on http://localhost:${config.port}`);
});
