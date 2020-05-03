import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';

const shortWords = Ember.A(['of','a','the','and','an','or','nor','but','is','if','then','else','when','at','from','by','on','off','for','in','out','over','to','into','with'])

export default helper(function titleCase([title]) {
  return title
    .split(/_+/g)
    .map((word, index) => {
      return (index > 0 && shortWords.includes(word))
        ? word
        : capitalize(word);
    });
});
