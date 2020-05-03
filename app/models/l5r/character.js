import Model from '@ember-data/model';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class L5rCharacterModel extends Model {
  @tracked voidPoints;
  
  @computed('ring_components')
  get rings() {
    return {
      air: this.addComponents('ring_components', 'air'),
      earth: this.addComponents('ring_components', 'earth'),
      fire: this.addComponents('ring_components', 'fire'),
      water: this.addComponents('ring_components', 'water'),
      void: this.addComponents('ring_components', 'void'),
    };
  }
  
  @computed('honor_components', 'glory_components', 'status_components', 'modifiers')
  get socialStanding() {
    return {
      honor: this.addComponents('honor_components') + (this.modifiers.honor || 0),
      glory: this.addComponents('glory_components') + (this.modifiers.glory || 0),
      status: this.addComponents('status_components') + (this.modifiers.status || 0),
    }
  }
  
  get endurance() { return this.addComponents('endurance_components') + (this.rings.earth + this.rings.fire)*2; }
  get composure() { return this.addComponents('composure_components') + (this.rings.earth + this.rings.water)*2; }
  
  addComponents(...path) {
    let list = path.reduce((current, componentName) => current[componentName], this) || [];
    return list.reduce((total, component) => total + component.add, 0);
  }
}
