import Model from '@ember-data/model';

export default class L5rRollableModel extends Model {
  get successes() { return this.countOf('S'); }
  get explodingSuccesses() { return this.countOf('R'); }
  get opportunities() { return this.countOf('O'); }
  get strife() { return this.countOf('X'); }

  countOf(symbol) {
    return this.symbols.reduce((count, sym) => sym === symbol ? count + 1 : count, 0);
  }
  
  toString() {
    return this.symbols.join(", ");
  }
}
