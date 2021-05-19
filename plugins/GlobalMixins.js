import Vue from 'vue'
import { sumBy as _sumBy, forEach as _forEach } from 'lodash'

const GlobalMixin = {
  data: () => ({
    containerSize: '1280px',
    storeUrl: '/store',
  }),
  computed: {
    subscriptionTypeSelected() {
      return this.$store.state.subscriptionTypeSelected
    },
    cartItems() {
      return this.$store.state.cart
    },
    subTotal() {
      return _sumBy(this.cartItems, (o) => o.pricing) || 0
    },
    subscriptionDiscountValue() {
      return (
        this.subTotal * (this.subscriptionTypeSelected.discountPercentage / 100)
      )
    },
    userLoggedIn() {
      return this.$store.state.userLoggedIn
    },
  },
}
Vue.mixin(GlobalMixin)
