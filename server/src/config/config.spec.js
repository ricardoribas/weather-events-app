const assert = require('assert');
const config = require('.');

describe('Environment configuration', () => {
  afterEach(() => {
    delete process.env.API_BASE_URL;
    delete process.env.PORT;
    delete process.env.DB_LOCATION;
  });

  it('Valid configuration with base url and database location', () => {
    process.env.API_BASE_URL = 'random-api-base-url';
    process.env.DB_LOCATION = 'random-database-path';

    const validConfig = config();

    assert.notEqual(validConfig, undefined);
    assert.equal(validConfig.port, 4000);
    assert.equal(validConfig.ogunApi, 'random-api-base-url:4000');
    assert.equal(validConfig.dbPath, 'random-database-path');
  });

  it('Valid configuration with PORT', () => {
    process.env.PORT = 1234;
    process.env.API_BASE_URL = 'random-api-base-url';
    process.env.DB_LOCATION = 'random-database-path';

    const validConfig = config();

    assert.notEqual(validConfig, undefined);
    assert.equal(validConfig.port, 1234);
    assert.equal(validConfig.ogunApi, 'random-api-base-url:1234');
    assert.equal(validConfig.dbPath, 'random-database-path');
  });
});
