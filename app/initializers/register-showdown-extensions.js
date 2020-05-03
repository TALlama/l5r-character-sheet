// app/initializers/register-showdown-extensions.js
import showdown from 'showdown';

export function initialize() {
  showdown.extension("l5r", function() {
    return [{ // remove example rolls, as they take up a lot of space
      type: 'lang',
      regex: /\s*\(such as.*?\)/ig,
      replace: '~~$0~~',
    }, { // remove example rolls, as they take up a lot of space
      type: 'lang',
      regex: /\s*\(see.*? on page \d+\)/ig,
      replace: '~~$0~~',
    }, { // make sure we get real p tags
      type: 'lang',
      regex: /\n/g,
      replace: '\n\n',
    }, { // remove hyphens copied from PDF
      type: 'lang',
      regex: '- ',
      replace: '',
    }, { // PDF opportunity glyph
      type: 'output',
      regex: '',
      replace: "<svg class='svg-text' viewBox='0 0 100 100'><use href='#opportunity' /></svg>",
    }, { // PDF ring die glyph
      type: 'output',
      regex: '',
      replace: "<svg class='svg-text' viewBox='0 0 100 100' fill='black'><use href='#ring-die' /></svg>",
    }, { // PDF success glyph
      type: 'output',
      regex: '',
      replace: "<svg class='svg-text' viewBox='0 0 100 100'><use href='#success' /></svg>",
    }, { // PDF exploding success glyph
      type: 'output',
      regex: '',
      replace: "<svg class='svg-text' viewBox='0 0 100 100'><use href='#explode' /></svg>",
    }, { // friendly content -> glyphs
      type: 'output',
      regex: ':(success|opportunity|strife|explode):',
      replace: "<svg class='svg-text' viewBox='0 0 100 100'><use href='#$1' /></svg>",
    }, { // highlight sections
      type: 'output',
      regex: '<p>(.*?):',
      replace: "<p><strong>$1:</strong>",
    }, { // highlight ring-flavored areas
      type: 'output',
      filter: function(text, converter, options) {
        return text.replace(/<p><strong>(Air|Earth|Fire|Water|Void)/g, (match, ringName) => {
          return `<p class='move--detail move--detail---${ringName.toLowerCase()}'><strong>${ringName}`;
        });
      },
    }];
  });
}

export default {
  name: 'register-showdown-extensions',
  initialize,
};
