import _find from 'lodash/find'
import _filter from 'lodash/filter'

export const state = () => ({
  cart: [],
  subscriptionTypeSelected: {
    name: 'Departmental Subscription Discount',
    discountPercentage: '12',
    services: [
      { _id: 1001, name: 'Front end Development' },
      { _id: 1002, name: 'Web Development' },
      { _id: 1003, name: 'Web Design' },
      { _id: 1004, name: 'Database Administration' },
      { _id: 1005, name: 'ERP / CRM Software' },
      { _id: 1006, name: 'Information Security' },
      { _id: 1007, name: 'Network & System Administration' },
    ],
  },
  checkoutProcessPageNumber: 1,
})

export const mutations = {
  updateCart({ cart }, item) {
    /** To be updated if physical product is introduce */
    if (_find(cart, (o) => o._id === item._id)) {
      cart.map((o) => (o._id === item._id ? item : o))
    } else {
      cart.push(item)
    }
  },
  removeCartItem(state, item) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state.cart = _filter(state.cart, (o) => o._id !== item._id)
  },
  setCheckProcessPage(state, currentPageNumber) {
    state.checkoutProcessPageNumber = currentPageNumber
  },
}
