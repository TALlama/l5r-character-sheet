import { helper } from '@ember/component/helper';

export default helper(function signedModifier([value]) {
  return '';
  //let leaf = path.splice(path.length - 1, 1)[0];
  //let twig = path.reduce((current, part) => current[part] || {}, object);
  //let value = twig[leaf] || 0;
  if (value === 0) {
    return "";
  } else if (value < 0) {
    return `<span style='color: red'>-${-value}</span>`.htmlSafe();
  } else {
    return `<span style='color: green'>+${value}</span>`.htmlSafe();
  }
});
