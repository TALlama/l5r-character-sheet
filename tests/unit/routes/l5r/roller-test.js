import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | l5r/roller', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:l5r/roller');
    assert.ok(route);
  });
});
