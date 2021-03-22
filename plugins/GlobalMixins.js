import Vue from 'vue'
import { sumBy as _sumBy, forEach as _forEach } from 'lodash'

Vue.mixin({
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
    getAllowedItems(item, fields) {
      const updatedItem = {}
      _forEach(Object.keys(item), (key) => {
        if (fields.includes(key)) {
          updatedItem[key] = item[key]
        }
      })

      return updatedItem
    },
  },
})
