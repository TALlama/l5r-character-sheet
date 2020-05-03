import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class L5rCharacterSheetComponent extends Component {
  @tracked dicePool = null;
  
  @service store;
  
  get model() { return this.args.model; }
  
  get background() {
    return {
      clan: `${this.answer(1)} clan, ${this.answer(2)} family`,
      school: `${this.answer(3)}, Rank ${this.model.school_rank || 1}`,
      roles: this.roles,
      titles: this.titles,
      ninjō: this.answer(5),
      giri: this.answer(6),
    };
  }
  get roles() { return this.model.roles ? this.model.roles.join(", ") : "No roles"; }
  get titles() { return this.model.titles ? this.model.titles.join(", ") : "No titles"; }
  
  get voidPoints() { return typeof(this.model.voidPoints) === 'undefined' ? Math.round(this.model.rings.void / 2) : this.model.voidPoints; }
  
  get focus() { return this.addComponents('focus_components') + (this.model.rings.fire + this.model.rings.air); }
  get vigilance() { return this.addComponents('vigilance_components') + (this.model.rings.air + this.model.rings.water)/2; }
  
  question(question) {
    return this.model.questions[question];
  }
  
  answer(question) {
    return this.question(question).answer;
  }
  
  addComponents(...path) {
    let list = path.reduce((current, componentName) => current[componentName], this.model) || [];
    return list.reduce((total, component) => total + component.add, 0);
  }
  
  _findDt(event) {
    let closestDescriptionListTag = event.target.closest('dt, dd');
    let tagName = closestDescriptionListTag && closestDescriptionListTag.tagName;
    return (tagName == 'DT') ? event.target : ((tagName == 'DD') ? closestDescriptionListTag.previousElementSibling : null);
  }
  
  @action
  ringClick(event) {
    let dt = this._findDt(event);
    this.model.set('stance', dt ? dt.innerText.toLowerCase() : null);
  }
  
  @action
  approachChange(event) {
    this.ringClick(event);
  }
  
  @action
  rollSkill(event) {
    let dt = this._findDt(event);
    if (!dt) return;
    
    let ringName = this.model.stance;
    let ringCount = this.addComponents('ring_components', ringName);
    
    let skillName = dt.innerText;
    let skillCount = this.addComponents('skill_components', skillName);
    
    this.roll({ringCount, skillCount}, event);
  }
  
  @action
  async roll(params, event) {
    this.dicePool = this.store.createRecord('l5r/dice-pool', params).fill();
  }
  
  @action
  socialStandingClick(event) {
    let dt = this._findDt(event);
    if (!dt) return;
    
    let statName = dt.innerText.toLowerCase();
    
    let delta = prompt(`Change ${statName} by how much?`);
    let modifiers = {...this.model.modifiers};
    let current = modifiers[statName] || 0;
    modifiers[statName] = current + Number(delta)
    this.model.set('modifiers', modifiers);
  }
  
  @action
  gainFatigue(event) {
    this.model.set('fatigue', Math.min(this.model.fatigue + 1, this.model.endurance));
  }
  
  @action
  useFatigue(event) {
    this.model.set('fatigue', Math.max(this.model.fatigue - 1, 0));
  }
  
  @action
  gainStrife(event) {
    this.model.set('strife', Math.min(this.model.strife + 1, this.model.composure));
  }
  
  @action
  useStrife(event) {
    this.model.set('strife', Math.max(this.model.strife - 1, 0));
  }
  
  @action
  gainVoidPoint(event) {
    console.log({will: 'gain', vp: this.voidPoints});
    this.model.set('voidPoints', Math.min(this.voidPoints + 1, this.model.rings.void));
    console.log({did: 'gain', vp: this.voidPoints});
  }
  
  @action
  useVoidPoint(event) {
    console.log({will: 'use', vp: this.voidPoints});
    this.model.set('voidPoints', Math.max(this.voidPoints - 1, 0));
    console.log({did: 'use', vp: this.voidPoints});
  }
}
