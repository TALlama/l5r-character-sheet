import { attr, belongsTo } from '@ember-data/model';
import L5rRollable from './rollable'

export default class L5rDieModel extends L5rRollable {
  @attr('string') face;
  @attr('string') type;
  @attr('boolean') kept;
  @belongsTo('l5r/dice-pool', {inverse: 'dice'}) pool;
  
  get possibleFaces() {
    return {
      'ring': ['-', 'OX', 'O', 'SX', 'S', 'RX'],
      'skill': ['-', '-', 'O', 'O', 'O', 'SX', 'SX', 'S', 'S', 'SO', 'RX', 'R'],
    }[this.type];
  }
  
  get symbols() {
    return this.face.split('');
  }
  
  get svgIds() {
    return [`${this.type}-die`, `face-${this.face}`];
  }
  
  roll() {
    let faces = this.possibleFaces;
    this.face = faces[Math.floor(Math.random() * faces.length)];
  }
  
  toString() {
    return this.face;
  }
}
