const Joi = require('@hapi/joi');

const SCHEMA = Joi.object().keys({
  PORT: Joi.number(),
  API_BASE_URL: Joi.string().required(),
  DB_LOCATION: Joi.string().required()
});

const getConfig = (params = {}) => Joi.validate(params, SCHEMA);

module.exports = {
  SCHEMA,
  getConfig
};
