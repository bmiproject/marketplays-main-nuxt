<template>
  <v-responsive>
    <store-category-listing />
    <store-featured-service-by-category style="padding-bottom: 150px" />
  </v-responsive>
</template>
<script>
export default {
  name: 'Categories',
  head: {
    title: 'Categories',
  },
  layout: 'ecommerce',
}
</script>
