import { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import L5rRollable from './rollable'

export default class L5rDicePoolModel extends L5rRollable {
  @attr('integer') ringCount;
  @attr('integer') skillCount;
  
  @hasMany('l5r/die', {inverse: 'pool'}) dice;
  
  constructor(...args) {
    super(...args);
  }
  
  async fill() {
    let dice = await this.dice;
    for(let r = 0; r < this.ringCount; r++) { dice.pushObject(this.store.createRecord('l5r/die', {type: 'ring'})); }
    for(let s = 0; s < this.skillCount; s++) { dice.pushObject(this.store.createRecord('l5r/die', {type: 'skill'})); }
    dice.forEach(d => d.roll());
    return this;
  }
  
  @computed('dice.[]')
  get ringsRolled() { return this.dice.filter(d => d.type == 'ring'); }
  
  @computed('dice.[]')
  get skillsRolled() { return this.dice.filter(d => d.type == 'skill'); }
  
  @filterBy('dice', 'kept', true) keptDice;
  
  get faces() {
    return this.dice.map(d => d.face).sort();
  }
  
  get symbols() {
    return this.dice.map(d => d.symbols).flat().sort();
  }
  
  get keptSymbols() {
    return this.keptDice.map(d => d.symbols).flat().sort();
  }
  
  countSymbols(symbol) {
    return this.keptSymbols.filter(s => s === symbol).length;
  }
  
  roll() {
    this.dice.forEach(d => d.roll());
  }
  
  diceCount(fn=()=>true) {
    return this.dice.reduce((count, die) => fn(die) ? count + 1 : count, 0);
  }
}
