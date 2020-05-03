import Component from '@glimmer/component';

export default class L5rVitalStatComponent extends Component {
  get style() {
    return this.args.current ? `background: linear-gradient(to right, var(--fill-color) 0%, var(--fill-color) ${Number(this.fillPercent)}%, white 0)`.htmlSafe() : "".htmlSafe();
  }
  
  get fillPercent() { return this.args.current / this.args.max * 100; }
  
  get atZero() { return this.args.current === 0; }
  get atMax() { return this.args.current === this.args.max; }
}
