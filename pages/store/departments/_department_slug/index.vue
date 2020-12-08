<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="single-department">
    <v-skeleton-loader
      v-if="isLoading"
      class="mx-auto"
      max-width="300"
      type="card"
    ></v-skeleton-loader>
    <article v-else class="text-center my-10">
      <h1 class="mb-5" v-text="department.name"></h1>
      <p v-html="department.description"></p>
    </article>
    <store-services-grid :items="department.services" />
    <store-counters />
    <store-pricing style="margin-top: -100px; padding-top: 80px" />
    <store-testimonials />
  </section>
</template>
<script>
import gql from 'graphql-tag'

export default {
  name: 'SingleDepartment',
  apollo: {
    department: {
      query: gql`
        query getOneDepartment($filter: FilterFindOneDepartmentInput) {
          getOneDepartment(filter: $filter) {
            name
            description
            services {
              name
              slug
              image
            }
          }
        }
      `,
      variables() {
        return {
          filter: {
            slug: this.$route.params.department_slug,
          },
        }
      },
      update(data) {
        return data.getOneDepartment
      },
    },
  },
  data: () => ({
    department: {},
  }),
  head: {
    title: 'Department',
  },
  layout: 'ecommerce',
}
</script>
