import Route from '@ember/routing/route';

export default class L5rRollerRoute extends Route {
  model(params) {
    return this.store.createRecord('l5r/dice-pool', params).fill();
  }
}
