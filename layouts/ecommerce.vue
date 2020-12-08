<template>
  <v-app :class="bodyClassName">
    <header-layout />
    <header-nav-ecommerce />
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-layout />
  </v-app>
</template>

<script>
import HeaderLayout from '~/components/Header'
import HeaderNavEcommerce from '~/components/HeaderNavEcommerce'
import FooterLayout from '~/components/Footer'
export default {
  name: 'EcommerceTemplate',
  components: {
    HeaderLayout,
    FooterLayout,
    HeaderNavEcommerce,
  },
  computed: {
    bodyClassName() {
      return this.$route.name ? this.$route.name.toLowerCase() : ''
    },
  },
}
</script>
