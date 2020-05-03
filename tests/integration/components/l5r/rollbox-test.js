import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | l5r/rollbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<L5r::Rollbox />`);

    assert.equal(this.element.textContent.split("\n").map(s => s.trim()).filter(s => s).join("\n"), [
      'Ring dice',
      'Skill dice',
      'Roll!',
      '[die] {die}',
      '+ Ring',
      '+ Skill',
      'keeps left',
      '1',
      '(click dice to keep them)',
    ].join("\n"));
  });
});
