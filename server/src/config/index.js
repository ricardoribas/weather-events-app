const { getConfig } = require('./schema');
require('dotenv').config();

module.exports = () => {
  const {
    PORT,
    API_BASE_URL,
    DB_LOCATION
  } = process.env;

  const { error } = getConfig({
    PORT,
    API_BASE_URL,
    DB_LOCATION
  });

  const port = process.env.PORT || 4000;
  const baseApiUrl = API_BASE_URL;
  const dbPath = DB_LOCATION;

  return !error ? {
    port,
    dbPath,
    ogunApi: `${baseApiUrl}:${port}`
  } : undefined;
};
