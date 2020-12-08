<template>
  <section class="services-grid">
    <v-responsive :max-width="containerSize" class="mx-auto mb-15">
      <v-row class="mb-15">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="4"
          class="service-item"
        >
          <NuxtLink :to="item.slug || ``">
            <v-img
              :src="item.image || `/image-placeholder.jpg`"
              max-height="355px"
              class="mx-auto"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row
                    align="center"
                    class="white--text mx-auto text-center service-item-content"
                    justify="center"
                  >
                    <v-col>
                      <h4 v-text="item.name"></h4>
                    </v-col>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'ServicesGridSection',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.services-grid {
  background: #ffffff;
}
.service-item .v-image {
  position: relative;
}
.service-item .v-image:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: rgba(17, 17, 17, 0.5);
  z-index: 10;
}
.service-item:hover .v-image:before {
  background: linear-gradient(225deg, #e25405 0%, #ca0316 100%), #ffffff;
}
.service-item .v-image .service-item-content {
  z-index: 100;
}
</style>
