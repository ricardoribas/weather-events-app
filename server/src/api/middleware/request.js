const { BAD_REQUEST } = require('./../constants');
const { hasValidRequest } = require('./../utils/request');

module.exports = (req, res, next) => {
  if (hasValidRequest(req)) {
    next();
  }

  res.status(BAD_REQUEST);
};
