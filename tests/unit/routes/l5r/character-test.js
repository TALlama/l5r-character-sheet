import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | l5r/character', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:l5r/character');
    assert.ok(route);
  });
});
