<template>
  <header class="checkout-process-header">
    <v-responsive width="1300px" height="100px" class="mx-auto no-flex">
      <v-toolbar flat class="py-5">
        <v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <NuxtLink :to="storeUrl">
            <v-img alt="BMI Logo" contain src="/logo.png" width="345px" />
          </NuxtLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row class="my-auto" no-gutters>
          <v-col class="text-right" lg="12">
            <NuxtLink v-for="(item, index) in nav" :key="index" :to="item.link">
              <v-btn class="topmenu-link text-capitalize" text depressed>
                <v-btn
                  v-if="index + 1 < $store.state.checkoutProcessPageNumber"
                  fab
                  color="#1358B5"
                  depressed
                  x-small
                  class="nav-badge mr-3"
                >
                  <v-icon class="mt-n1">mdi-check</v-icon>
                </v-btn>
                <span
                  v-else
                  class="nav-badge mr-3"
                  :class="{
                    'current-page':
                      index + 1 === $store.state.checkoutProcessPageNumber,
                  }"
                >
                  {{ index + 1 }}
                </span>
                {{ item.label }}
                <span v-if="index !== nav.length - 1" class="ml-5 separator">
                  >
                </span>
              </v-btn>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-toolbar>
    </v-responsive>
  </header>
</template>
<script>
import _merge from 'lodash/merge'
export default {
  name: 'HeaderCheckoutProcessLayout',
  data: () => ({
    topMenu: [
      { name: 'cart', label: 'Shopping Cart', link: 'cart' },
      { name: 'checkout', label: 'Checkout', link: 'checkout' },
      { name: 'finish', label: 'Finish' },
    ],
  }),
  computed: {
    nav() {
      return this.topMenu.map((o) => {
        return _merge(o, {
          link: o.link ? o.link : '#',
        })
      })
    },
  },
}
</script>
