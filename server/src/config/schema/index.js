const Joi = require('@hapi/joi');

const SCHEMA = Joi.object().keys({
  PORT: Joi.number(),
  API_BASE_URL: Joi.string().required(),
  DB_LOCATION: Joi.string().required(),
  DARK_SKY_SECRET_KEY: Joi.string().required(),
  MAP_BOX_API_TOKEN: Joi.string().required()
});

const getConfig = (params = {}) => Joi.validate(params, SCHEMA);

module.exports = {
  SCHEMA,
  getConfig
};
