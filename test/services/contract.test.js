const assert = require('assert');
const app = require('../../src/app');

describe('\'contract\' service', () => {
  it('registered the service', () => {
    const service = app.service('contract');

    assert.ok(service, 'Registered the service');
  });
});
