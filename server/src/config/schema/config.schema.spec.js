const assert = require('assert');
const { getConfig } = require('.');

describe('Schema configuration', () => {
  it('Invalid configuration', () => {
    const wrongConfig = getConfig();

    assert.notEqual(wrongConfig.error, undefined);
  });
});
