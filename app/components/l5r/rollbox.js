import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class L5rRollboxComponent extends Component {
  @tracked ringCount;
  @tracked skillCount;
  @tracked rerolls = 0;
  @tracked dicePools = [];
  
  @service store;
  
  constructor(...args) {
    super(...args);
    
    this.dicePools = [...this.args.dicePools].filter(p => p);
    this.ringCount = this.ringsRolled.length;
    this.skillCount = this.skillsRolled.length;
  }
  
  @computed('dicePools.@each.ringsRolled')
  get ringsRolled() { return this.dicePools[0] ? this.dicePools[0].ringsRolled : []; }
  
  @computed('dicePools.@each.skillsRolled')
  get skillsRolled() { return this.dicePools[0] ? this.dicePools[0].skillsRolled : []; }
  
  get successes() { return this.countSymbols('S') + this.countSymbols('R'); }
  get opportunities() { return this.countSymbols('O'); }
  get strife() { return this.countSymbols('X'); }
  get exploding() { return this.currentPool ? this.currentPool.countSymbols('R') : 0; }

  get initialKeptDice() { return this.dicePools[0] ? this.dicePools[0].keptDice : 0; }
  
  @computed('dicePools.@each.keptDice')
  get keptDice() { return this.dicePools.flatMap(p => p.keptDice); }
  get keptSymbols() { return this.keptDice.flatMap(p => p.symbols); }
  
  @computed('ringCount', 'keptDice.[]')
  get keepsLeft() { return this.ringsRolled.length - this.initialKeptDice.length; }
  get underkept() { return this.keepsLeft > 0; }
  get overkept() { return this.keepsLeft < 0; }
  
  countSymbols(symbol) {
    return this.keptSymbols.filter(s => s === symbol).length;
  }
  
  @computed('dicePools.[]')
  get currentPool() { return this.dicePools[this.dicePools.length-1]; }
  
  @action
  roll() {
    let newPool = this.store.createRecord('l5r/dice-pool', {ringCount: this.ringCount, skillCount: this.skillCount})
    newPool.fill();
    this.dicePools = [newPool];
  }
  
  @action
  onReroll() {
    this.rerolls += 1;
  }
  
  @action
  async addDie(type, event) {
    let die = this.store.createRecord('l5r/die', {type: type, distinction: 'added'})
    die.roll();
    
    let currentPool = this.currentPool;
    let dice = await currentPool.dice;
    dice.pushObject(die);
  }
  
  @action
  async rollExploding(event) {
    let currentPool = this.currentPool;
    let explodingDice = currentPool.keptDice.filter(d => d.symbols.includes('R'));
    let ringCount = explodingDice.filter(d => d.type == 'ring').length;
    let skillCount = explodingDice.filter(d => d.type == 'skill').length;

    let newPool = this.store.createRecord('l5r/dice-pool', {ringCount, skillCount})
    newPool.fill();
    
    let pools = await this.dicePools;
    pools.pushObject(newPool);
  }
}
