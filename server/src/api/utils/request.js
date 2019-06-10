const { UNKNOWN } = require('./../constants');

const VALIDATORS = {
    '/api/events/': {
        POST: function (req) {
            const {
                title,
                date
            } = req.body;

            return !!title && !!date;
        }
    }
}

function hasValidRequest(req) {
    return !VALIDATORS[req.originalUrl] ||
        !VALIDATORS[req.originalUrl][req.method] ||
        VALIDATORS[req.originalUrl][req.method](req);
}

function executeRequest(promiseRequest, req, res) {
    promiseRequest
        .then(result => res.json(result))
        .catch(err => {
            req.status(UNKNOWN).send(err);
        });
}

module.exports = {
    executeRequest,
    hasValidRequest
}