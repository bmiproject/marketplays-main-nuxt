import Vue from 'vue'
import VueCurrencyFilter from 'vue-currency-filter'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach((rule) => {
  // eslint-disable-next-line import/namespace
  extend(rule, rules[rule])
})

// with typescript
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  })
}

localize({
  en: {
    messages: {
      required: 'This field is required.',
      email: 'Please enter a valid email address.',
    },
  },
})

Vue.use(VueCurrencyFilter, {
  symbol: '$',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: false,
  avoidEmptyDecimals: undefined,
})

if (!Vue.moment) {
  Vue.use(require('vue-moment'))
}

Vue.filter('truncate', function (value, maxLength) {
  if (!value || value.length <= maxLength) {
    return value
  }
  return value.slice(0, maxLength) + '...'
})
