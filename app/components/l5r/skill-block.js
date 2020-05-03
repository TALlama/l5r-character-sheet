import Component from '@glimmer/component';

export default class L5rSkillBlockComponent extends Component {
  get approaches() {
    return {
      artisan: {
        air: 'Refine',
        earth: 'Restore',
        fire: 'Invent',
        water: 'Adapt',
        void: 'Attune',
      },
      martial: {
        air: 'Feint',
        earth: 'Withstand',
        fire: 'Overwhelm',
        water: 'Shift',
        void: 'Sacrifice',
      },
      scholar: {
        air: 'Analyze',
        earth: 'Recall',
        fire: 'Theorize',
        water: 'Survey',
        void: 'Sense',
      },
      social: {
        air: 'Trick',
        earth: 'Reason',
        fire: 'Incite',
        water: 'Charm',
        void: 'Enlighten',
      },
      trade: {
        air: 'Con',
        earth: 'Produce',
        fire: 'Innovate',
        water: 'Exchange',
        void: 'Subsist',
      },
    }[this.args.type] || [];
  }
  
  get skills() {
    return this._skills = this._skills || this.skillList.reduce((obj, skill) => {
      obj[skill] = this.modifier(skill);
      return obj;
    }, {});
  }
  
  get skillList() {
    return {
      artisan: ['Aesthetics', 'Composition', 'Design', 'Smithing'],
      martial: ['Fitness', 'Martial Arts [Melee]', 'Martial Arts [Ranged]', 'Martial Arts [Unarmed]', 'Meditation', 'Tactics'],
      scholar: ['Culture', 'Government', 'Medicine', 'Sentiment', 'Theology'],
      social:  ['Command', 'Courtesy', 'Games', 'Performance'],
      trade:   ['Commerce', 'Labor', 'Seafaring', 'Skulduggery', 'Survival'],
    }[this.args.type] || [];
  }
  
  modifier(skill) {
    return this.args.sheet.addComponents('skill_components', skill);
  }
}
