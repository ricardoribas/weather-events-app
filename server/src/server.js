const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

process.on('uncaughtException', (err, origin) => {
  console.log(err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

const config = require('./config')();

const headersMiddleware = require('./api/middleware/headers');
const requestMiddleware = require('./api/middleware/request');

if (!config) {
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = express.Router();

app.use(headersMiddleware);
router.use(requestMiddleware);

mongoose.connect(config.dbPath, {
    useNewUrlParser: true 
  }, (error) => {
    error && console.log('A database error occurred', error);
  });

router.get('/ping', (req, res) => {
  res.send('pong');
});

const apiRoutes = require('./api/router')(router, config);

app.use('/api', apiRoutes);

app.listen(config.port, () => {
  console.log(`Node server listening on http://localhost:${config.port}`);
});
