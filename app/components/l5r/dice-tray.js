import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class L5rDiceTrayComponent extends Component {
  @action
  toggleKept(die, event) {
    die.kept = !die.kept;
  }
  
  @action
  removeRerolling(event) {
    event.target.classList.remove('die---rerolling');
  }
  
  @action
  reroll(die, event) {
    this.args.onReroll && this.args.onReroll(event);
    event.target.closest('.rollbox--keeper').querySelector('.die').classList.add('die---rerolling');
    die.roll();
  }
}
