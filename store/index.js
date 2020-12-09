import _find from 'lodash/find'
import _filter from 'lodash/filter'

export const state = () => ({
  cart: [],
})

export const mutations = {
  updateCart({ cart }, item) {
    /** To be updated if physical product is introduce */
    if (_find(cart, (o) => o._id === item._id)) return false

    cart.push(item)
  },
  removeCartItem(state, item) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state.cart = _filter(state.cart, (o) => o._id !== item._id)
  },
}
