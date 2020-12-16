<template>
  <section class="pb-15">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex mt-8 mb-15">
      <v-row>
        <v-col cols="12">
          <article>
            <h4 class="mb-2">Billing Details</h4>
          </article>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
import _sumBy from 'lodash/sumBy'

export default {
  name: 'Checkout',
  layout: 'checkout-process',
  data: () => ({
    form: {},
  }),
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
    subTotal() {
      return _sumBy(this.cartItems, (o) => o.pricing)
    },
  },
  mounted() {
    this.$store.commit('setCheckProcessPage', 2)
  },
}
</script>
