import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | l5r/die', function(hooks) {
  setupTest(hooks);

  test('it can be created', function(assert) {
    let store = this.owner.lookup('service:store');
    let die = store.createRecord('l5r/die', {});
    assert.ok(die);
  });

  test('it can be created with a specific face showing', function(assert) {
    let store = this.owner.lookup('service:store');
    let die = store.createRecord('l5r/die', {rolledFace: 'SX'});
    assert.equal(die.face, 'SX');
    assert.deepEqual(die.symbols, ['S', 'X']);
    assert.equal(die.successes, 1);
    assert.equal(die.opportunities, 0);
    assert.equal(die.strife, 1);
    assert.equal(die.explodingSuccesses, 0);
  });

  test('it can be created with a specific type, and picks a face when needed', function(assert) {
    let store = this.owner.lookup('service:store');
    
    let ringDie = store.createRecord('l5r/die', {type: 'ring'});
    assert.equal(ringDie.type, 'ring');
    assert.ok(ringDie.face);
    
    let skillDie = store.createRecord('l5r/die', {type: 'skill'});
    assert.equal(skillDie.type, 'skill');
    assert.ok(skillDie.face);
  });
});
