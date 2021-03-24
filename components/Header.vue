<template>
  <header>
    <v-responsive width="1300px" height="100px" class="mx-auto no-flex">
      <v-toolbar flat class="py-5">
        <v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <NuxtLink to="/">
            <v-img alt="BMI Logo" contain src="/logo.png" width="345px" />
          </NuxtLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row class="my-auto" no-gutters>
          <v-col lg="5">
            <v-text-field
              clear-icon="mdi-magnify"
              class="rounded"
              dense
              outlined
              placeholder="Search"
              hide-details
            >
              <template slot="append">
                <v-icon color="#BE1E2D">mdi-magnify</v-icon>
              </template>
            </v-text-field>
            <NuxtLink
              :to="`${storeUrl}/advanced_search`"
              class="float-right text-uppercase font-weight-bold mr-4 advanced-search-link mt-1"
            >
              Advanced Search
            </NuxtLink>
          </v-col>
          <v-col class="text-right" lg="7">
            <v-btn
              v-for="item in topMenu"
              :key="item.name"
              :to="item.link"
              class="topmenu-link text-capitalize"
              text
              v-text="item.label"
            ></v-btn>
            <nuxt-link to="/signup">
              <v-btn class="ml-2" color="primary"> Sign Up </v-btn>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-toolbar>
    </v-responsive>
  </header>
</template>
<script>
export default {
  name: 'HeaderLayout',
  data: () => ({
    topMenu: [
      { name: 'how-it-works', label: 'How it works' },
      { name: 'solutions', label: 'Solutions' },
      { name: 'login', label: 'Login', link: 'login' },
    ],
  }),
}
</script>
