import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | l5r/dice pool', function(hooks) {
  setupTest(hooks);

  test('it can be created', function(assert) {
    let store = this.owner.lookup('service:store');
    let pool = store.createRecord('l5r/dice-pool', {});
    assert.ok(pool);
    assert.equal(pool.dice.length, 0);
    assert.equal(pool.ringCount, 0);
    assert.equal(pool.skillCount, 0);
  });

  test('it can be created with dice', function(assert) {
    let store = this.owner.lookup('service:store');
    let pool = store.createRecord('l5r/dice-pool', {dice: [
      store.createRecord('l5r/die', {type: 'ring'}),
      store.createRecord('l5r/die', {type: 'ring'}),
      store.createRecord('l5r/die', {type: 'skill'}),
    ]});
    assert.ok(pool);
    assert.equal(pool.dice.length, 3);
    assert.equal(pool.ringCount, 2);
    assert.equal(pool.skillCount, 1);
  });

  test('it tallies the symbols from its dice', function(assert) {
    let store = this.owner.lookup('service:store');
    let pool = store.createRecord('l5r/dice-pool', {dice: [
      store.createRecord('l5r/die', {type: 'ring', rolledFace: 'SX'}),
      store.createRecord('l5r/die', {type: 'ring', rolledFace: 'SO'}),
      store.createRecord('l5r/die', {type: 'skill', rolledFace: 'R'}),
    ]});
    assert.equal(pool.successes, 2);
    assert.equal(pool.opportunities, 1);
    assert.equal(pool.explodingSuccesses, 1);
    assert.equal(pool.strife, 1);
  });
});
