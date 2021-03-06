'use strict'

module.exports = {
  rules: {
    'no-ajax': require('./rules/no-ajax'),
    'no-ajax-events': require('./rules/no-ajax-events'),
    'no-animate': require('./rules/no-animate'),
    'no-attr': require('./rules/no-attr'),
    'no-bind': require('./rules/no-bind'),
    'no-class': require('./rules/no-class'),
    'no-clone': require('./rules/no-clone'),
    'no-closest': require('./rules/no-closest'),
    'no-css': require('./rules/no-css'),
    'no-data': require('./rules/no-data'),
    'no-deferred': require('./rules/no-deferred'),
    'no-delegate': require('./rules/no-delegate'),
    'no-each': require('./rules/no-each'),
    'no-extend': require('./rules/no-extend'),
    'no-fade': require('./rules/no-fade'),
    'no-filter': require('./rules/no-filter'),
    'no-find': require('./rules/no-find'),
    'no-global-eval': require('./rules/no-global-eval'),
    'no-grep': require('./rules/no-grep'),
    'no-has': require('./rules/no-has'),
    'no-hide': require('./rules/no-hide'),
    'no-html': require('./rules/no-html'),
    'no-in-array': require('./rules/no-in-array'),
    'no-is-array': require('./rules/no-is-array'),
    'no-is-function': require('./rules/no-is-function'),
    'no-is': require('./rules/no-is'),
    'no-load': require('./rules/no-load'),
    'no-map': require('./rules/no-map'),
    'no-merge': require('./rules/no-merge'),
    'no-param': require('./rules/no-param'),
    'no-parent': require('./rules/no-parent'),
    'no-parents': require('./rules/no-parents'),
    'no-parse-html': require('./rules/no-parse-html'),
    'no-prop': require('./rules/no-prop'),
    'no-proxy': require('./rules/no-proxy'),
    'no-ready': require('./rules/no-ready'),
    'no-serialize': require('./rules/no-serialize'),
    'no-show': require('./rules/no-show'),
    'no-size': require('./rules/no-size'),
    'no-sizzle': require('./rules/no-sizzle'),
    'no-slide': require('./rules/no-slide'),
    'no-submit': require('./rules/no-submit'),
    'no-text': require('./rules/no-text'),
    'no-toggle': require('./rules/no-toggle'),
    'no-trigger': require('./rules/no-trigger'),
    'no-trim': require('./rules/no-trim'),
    'no-val': require('./rules/no-val'),
    'no-when': require('./rules/no-when'),
    'no-wrap': require('./rules/no-wrap')
  },
  configs: {
    deprecated: {
      rules: {
        'jquery/no-ajax': 2,
        'jquery/no-ajax-events': 2,
        'jquery/no-animate': 2,
        'jquery/no-attr': 2,
        'jquery/no-bind': 2,
        'jquery/no-class': 2,
        'jquery/no-clone': 2,
        'jquery/no-closest': 2,
        'jquery/no-css': 2,
        'jquery/no-data': 2,
        'jquery/no-deferred': 2,
        'jquery/no-delegate': 2,
        'jquery/no-each': 2,
        'jquery/no-fade': 2,
        'jquery/no-filter': 2,
        'jquery/no-find': 2,
        'jquery/no-global-eval': 2,
        'jquery/no-has': 2,
        'jquery/no-hide': 2,
        'jquery/no-html': 2,
        'jquery/no-in-array': 2,
        'jquery/no-is': 2,
        'jquery/no-load': 2,
        'jquery/no-map': 2,
        'jquery/no-merge': 2,
        'jquery/no-param': 2,
        'jquery/no-parent': 2,
        'jquery/no-parents': 2,
        'jquery/no-parse-html': 2,
        'jquery/no-prop': 2,
        'jquery/no-proxy': 2,
        'jquery/no-ready': 2,
        'jquery/no-serialize': 2,
        'jquery/no-show': 2,
        'jquery/no-size': 2,
        'jquery/no-sizzle': 2,
        'jquery/no-slide': 2,
        'jquery/no-submit': 2,
        'jquery/no-text': 2,
        'jquery/no-toggle': 2,
        'jquery/no-trigger': 2,
        'jquery/no-trim': 2,
        'jquery/no-val': 2,
        'jquery/no-when': 2,
        'jquery/no-wrap': 2
      }
    },
    slim: {
      rules: {
        'jquery/no-ajax': 2,
        'jquery/no-animate': 2,
        'jquery/no-fade': 2,
        'jquery/no-hide': 2,
        'jquery/no-load': 2,
        'jquery/no-param': 2,
        'jquery/no-serialize': 2,
        'jquery/no-show': 2,
        'jquery/no-slide': 2,
        'jquery/no-toggle': 2
      }
    }
  }
}
