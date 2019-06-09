const { getConfig } = require('./schema');
const { PLACEHOLDER_LOCATION } = require('./../api/constants');
require('dotenv').config();

module.exports = () => {
  const {
    PORT,
    API_BASE_URL,
    DB_LOCATION,
    DARK_SKY_SECRET_KEY,
    MAP_BOX_API_TOKEN
  } = process.env;

  const { error } = getConfig({
    PORT,
    API_BASE_URL,
    DB_LOCATION,
    DARK_SKY_SECRET_KEY,
    MAP_BOX_API_TOKEN
  });

  const port = process.env.PORT || 4000;
  const baseApiUrl = API_BASE_URL;
  const dbPath = DB_LOCATION;

  return !error ? {
    port,
    dbPath,
    ogunApi: `${baseApiUrl}:${port}`,
    darkSkyApi: `https://api.darksky.net/forecast/${DARK_SKY_SECRET_KEY}/`,
    mapBoxApi: `https://api.mapbox.com/geocoding/v5/mapbox.places/${PLACEHOLDER_LOCATION}.json?access_token=${MAP_BOX_API_TOKEN}`
  } : undefined;
};
