import Component from '@glimmer/component';
import L5rMoveComponent from './move';

export default class L5rStanceComponent extends L5rMoveComponent {
  get ring() { return this.args.ring || 'No'; }
  
  get title() {
    return `${this.ring} stance`;
  }
  
  get body() {
    return {
      air: "+1 to TN of Attack and Scheme checks targeting you (+2 at rank 4+).",
      earth: "Others cannot spend :opportunity: to inflict critical strikes or conditions on you.",
      water: "Perform a second action on your turn that does not require a check or share a type with your first action.",
      fire: "If you succeed, +1 bonus success per :strife: symbol.",
      void: "You do not receive strife from :strife: symbols on checks.",
    }[this.ring] || "Select a stance";
  }
}
