import Component from '@glimmer/component';

export default class SvgUseComponent extends Component {
  get ids() { return (this.args.ids || [this.args.id]).map(id => `#${id.toLowerCase()}`); }
}
