const { getConfig } = require('./schema');
require('dotenv').config();

module.exports = () => {
  const {
    PORT,
  } = process.env;

  const { error } = getConfig({
    PORT
  });

  const port = process.env.PORT || 4000;

  return !error ? {
    port,
    ogunApi: `http://localhost:${port}`,
  } : undefined;
};
