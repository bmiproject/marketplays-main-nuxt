<template>
  <v-app :class="bodyClassName">
    <header-checkout-process-layout />
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-checkout-process-layout />
  </v-app>
</template>

<script>
import HeaderCheckoutProcessLayout from '~/components/HeaderCheckoutProcess'
import FooterCheckoutProcessLayout from '~/components/FooterCheckoutProcess'

export default {
  name: 'CheckoutProcess',
  components: {
    HeaderCheckoutProcessLayout,
    FooterCheckoutProcessLayout,
  },
  computed: {
    bodyClassName() {
      return this.$route.name ? this.$route.name.toLowerCase() : ''
    },
  },
}
</script>
