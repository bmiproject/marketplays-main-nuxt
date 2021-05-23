<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="single-category">
    <v-skeleton-loader
      v-if="isLoading"
      class="mx-auto"
      max-width="300"
      type="card"
    ></v-skeleton-loader>
    <article v-else class="text-center my-10">
      <h1 class="mb-5" v-text="category.name"></h1>
      <p v-html="category.description"></p>
    </article>
    <store-services-grid :items="category.services || []" />
    <store-counters />
    <store-pricing style="margin-top: -100px; padding-top: 80px" />
    <store-testimonials />
  </section>
</template>
<script>
import gql from 'graphql-tag'

export default {
  name: 'SingleCategory',
  apollo: {
    category: {
      query: gql`
        query getOneCategory($filter: FilterFindOneCategoryInput) {
          getOneCategory(filter: $filter) {
            name
            description
            services {
              name
              slug
              files
            }
          }
        }
      `,
      variables() {
        return {
          filter: {
            slug: this.$route.params.category_slug,
          },
        }
      },
      update(data) {
        return data.getOneCategory
      },
    },
  },
  data: () => ({
    category: {},
  }),
  head: {
    title: 'Categories',
  },
  layout: 'ecommerce',
}
</script>
