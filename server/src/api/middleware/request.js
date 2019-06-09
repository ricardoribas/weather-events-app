const { BAD_REQUEST } = require('./../constants');

const VALIDATORS = {
  '/api/events/': {
    POST: function(req) {
      const {
        title,
        date
      } = req.body;

      return !!title && !!date;
    }
  }
}

module.exports = (req, res, next) => {
  if (!VALIDATORS[req.originalUrl] ||
    !VALIDATORS[req.originalUrl][req.method] ||
    VALIDATORS[req.originalUrl][req.method](req)) {
    next();
  }

  req.status(BAD_REQUEST);
};
