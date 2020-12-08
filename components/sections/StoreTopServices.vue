<template>
  <section id="categories-section">
    <v-responsive class="no-flex mx-auto" :max-width="containerSize">
      <v-row>
        <v-col cols="12" class="mt-15 mb-8 text-center">
          <h3>Browse top services</h3>
        </v-col>
        <v-col
          v-for="(item, index) in services"
          :key="index"
          class="py-2"
          md="3"
        >
          <NuxtLink :to="item.slug || ``">
            <v-btn
              text
              class="text-capitalize"
              x-small
              style="font-size: 16px; color: #555"
            >
              <v-icon left color="primary" small>mdi-arrow-right</v-icon>
              {{ item.name }}
            </v-btn>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'TopServicesSection',
  data: () => ({
    services: [],
  }),
  mounted() {
    this.getList('services', ['_id', 'name', 'slug'], { limit: 47 })
  },
}
</script>
