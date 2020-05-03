import { module, test } from 'qunit';
import { click, visit, currentURL, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | rollbox/l5r', function(hooks) {
  setupApplicationTest(hooks);

  test('keeping dice', async function(assert) {
    await visit('/'); //TODO this should likely move elsewhere eventually
    assert.equal(currentURL(), '/');
    Rollbox.setFromParams(''); //TODO this shouldn't be necessary
    
    assert.dom('dl').includesText('keeps left 3 (click dice to keep them)');
    await click(".die");
    assert.dom('dl').includesText('keeps left 2 (click dice to keep them)');
    await click(".rollbox--keeper:nth-child(2) .die");
    await click(".rollbox--keeper:nth-child(3) .die");
    assert.dom('dl').includesText('keeps left 0');
    
    // can unkeeping
    await click(".rollbox--keeper:nth-child(3) .die");
    assert.dom('dl').includesText('keeps left 1');
  });

  test('counting symbols', async function(assert) {
    await visit('/'); //TODO this should likely move elsewhere eventually
    assert.equal(currentURL(), '/');
    Rollbox.setFromParams('?rings=S,O,SX');
    
    assert.dom('dl').includesText('successes 0');
    assert.dom('dl').includesText('opportunities 0');
    assert.dom('dl').includesText('strife 0');
    
    // symbols are counted for kept dice
    await click(".rollbox--keeper:nth-child(1) .die");
    assert.dom('dl').includesText('successes 1');
    assert.dom('dl').includesText('opportunities 0');
    assert.dom('dl').includesText('strife 0');
    
    await click(".rollbox--keeper:nth-child(2) .die");
    assert.dom('dl').includesText('successes 1');
    assert.dom('dl').includesText('opportunities 1');
    assert.dom('dl').includesText('strife 0');
    
    // some dice faces have multiple symbols
    await click(".rollbox--keeper:nth-child(3) .die");
    assert.dom('dl').includesText('successes 2');
    assert.dom('dl').includesText('opportunities 1');
    assert.dom('dl').includesText('strife 1');
  });

  test('rerolling individual dice', async function(assert) {
    await visit('/'); //TODO this should likely move elsewhere eventually
    assert.equal(currentURL(), '/');
    Rollbox.setFromParams('?rings=S');
    
    document.querySelector('.die').innerText = "HEY";
    assert.dom('.die').includesText("HEY");
    await click('.die--action---reroll');
    assert.dom('.die').doesNotIncludeText("HEY");
  });

  test('exploding dice', async function(assert) {
    await visit('/'); //TODO this should likely move elsewhere eventually
    assert.equal(currentURL(), '/');
    Rollbox.setFromParams('?rings=RX&skills=R,R');
    
    assert.dom('.dice-tray').exists({count: 1});
    assert.dom('.die').exists({count: 3});
    
    // keep all dice
    await click(`.rollbox--keeper:nth-child(1) .die`);
    await click(`.rollbox--keeper:nth-child(2) .die`);
    await click(`.rollbox--keeper:nth-child(3) .die`);
    
    // explode
    await click('.rollbox--action---roll-exploding');
    assert.dom('.dice-tray').exists({count: 2});
    assert.dom('.die').exists({count: 6});
  });

  test('adding ring dice', async function(assert) {
    await visit('/'); //TODO this should likely move elsewhere eventually
    assert.equal(currentURL(), '/');
    Rollbox.setFromParams('');
    
    assert.dom('dl').includesText('keeps left 3 (click dice to keep them)');
    assert.dom('.die---ring').exists({count: 3});
    await click('.rollbox--action---add-ring-die');
    assert.dom('dl').includesText('keeps left 4 (click dice to keep them)');
    assert.dom('.die---ring').exists({count: 4});
  });

  test('adding skill dice', async function(assert) {
    await visit('/'); //TODO this should likely move elsewhere eventually
    assert.equal(currentURL(), '/');
    Rollbox.setFromParams('');
    
    assert.dom('.die---skill').exists({count: 2});
    await click('.rollbox--action---add-skill-die');
    assert.dom('.die---ring').exists({count: 3});
  });
});
