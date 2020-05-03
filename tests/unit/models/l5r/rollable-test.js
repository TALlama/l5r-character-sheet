import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | l5r/rollable', function(hooks) {
  setupTest(hooks);

  test('it can be created', function(assert) {
    let store = this.owner.lookup('service:store');
    let rollable = store.createRecord('l5r/rollable', {});
    assert.ok(rollable);
  });
  
  test('it can tell you how many symbols it contains', function(assert) {
    let store = this.owner.lookup('service:store');
    let rollable = store.createRecord('l5r/rollable', {symbols: 'SX'.split('')});
    assert.equal(rollable.successes, 1);
    assert.equal(rollable.opportunities, 0);
    assert.equal(rollable.strife, 1);
    assert.equal(rollable.explodingSuccesses, 0);
  });
});
