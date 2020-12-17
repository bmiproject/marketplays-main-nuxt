<template>
  <nav class="header-nav">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex">
      <NuxtLink
        v-for="(item, index) in navs"
        :key="index"
        :to="item.slug || '#'"
      >
        <v-btn text depressed x-large tile>
          <v-icon v-if="item.icon && item.iconPosition == `left`" left>{{
            item.icon
          }}</v-icon>
          {{ item.name }}
          <v-icon v-if="item.icon && item.iconPosition == `right`" right>{{
            item.icon
          }}</v-icon>
        </v-btn>
      </NuxtLink>
    </v-responsive>
  </nav>
</template>
<script>
import gql from 'graphql-tag'
import { find as _find } from 'lodash'

export default {
  name: 'HeaderNavEcommerce',
  apollo: {
    departments: {
      query: gql`
        query {
          departments(limit: 8) {
            _id
            name
            slug
          }
        }
      `,
      update(data) {
        return data.departments
      },
    },
  },
  data: () => ({
    departments: [],
  }),
  computed: {
    navs() {
      const seeMore = {
        name: 'See All Categories',
        slug: '/store/departments',
        icon: 'mdi-chevron-down',
        iconPosition: 'right',
      }
      const navs = this.departments

      if (!_find(navs, (o) => o.name === seeMore.name)) navs.push(seeMore)

      return navs
    },
  },
}
</script>
