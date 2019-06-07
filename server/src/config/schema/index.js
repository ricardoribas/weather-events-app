const Joi = require('@hapi/joi');

const SCHEMA = Joi.object().keys({
  PORT: Joi.number()
});

const getConfig = (params = {}) => Joi.validate(params, SCHEMA);

module.exports = {
  SCHEMA,
  getConfig
};
