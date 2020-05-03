import Component from '@glimmer/component';

export default class L5rMoveComponent extends Component {
  get title() { return this.args.title || (this.item || {}).name; }
  get types() { return this.args.types || (this.item || {}).types; }
  get ring() { return this.args.ring || (this.item || {}).ring || 'general'; }
  get body() { return this.args.body || (this.item || {}).body; }
  get item() { return this.args.item; }
}
