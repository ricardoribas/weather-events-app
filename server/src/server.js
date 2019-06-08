/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config')();

const headersMiddleware = require('./api/middleware/headers');
const requestMiddleware = require('./api/middleware/request');

if (!config) {
  process.exit(1);
}

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(headersMiddleware);
router.use(requestMiddleware);

mongoose.connect(config.dbPath, {
    useNewUrlParser: true 
  }, () => {
    debugger;
  });
const db = mongoose.connection;

debugger;

router.get('/', (req, res) => {
  res.send('Welcome to Ogun api');
});

require('./api/events')(router);

app.use('/', router);

app.listen(config.port, () => {
  console.log(`Node server listening on http://localhost:${config.port}`);
});
