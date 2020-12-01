<template>
  <section class="services-grid">
    <v-responsive :max-width="containerSize" class="mx-auto mb-15">
      <v-row class="mb-15">
        <v-col
          v-for="(item, index) in services"
          :key="index"
          cols="4"
          class="service-item"
        >
          <NuxtLink :to="item.slug ? $nuxt.$route.path + '/' + item.slug : ''">
            <v-img :src="item.image">
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
  data: () => ({
    services: [
      {
        name: 'Database Administration',
        image: require('~/assets/images/ecommerce/database.jpg'),
        slug: 'database-administration',
      },
      {
        name: 'ERP / CRM Software',
        image: require('~/assets/images/ecommerce/erp.jpg'),
        slug: 'erp-crm-software',
      },
      {
        name: 'Information Security',
        image: require('~/assets/images/ecommerce/info-tech1.jpg'),
        slug: 'information-security',
      },
      {
        name: 'Network & System Administration',
        image: require('~/assets/images/ecommerce/network.jpg'),
        slug: 'network-system-administration',
      },
      {
        name: 'Front End Developer',
        image: require('~/assets/images/ecommerce/front-end.jpg'),
        slug: 'front-end-developer',
      },
      {
        name: 'Back End Developer',
        image: require('~/assets/images/ecommerce/back-end.jpg'),
        slug: 'back-end-developer',
      },
      {
        name: 'Custom Development',
        image: require('~/assets/images/ecommerce/custom.jpg'),
        slug: 'custom-development',
      },
    ],
  }),
}
</script>
<style scoped>
.services-grid {
  background: #ffffff;
}
.service-item {
  transition: all ease-in 0.5s;
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
  transition: all ease-in 0.5s;
}
.service-item:hover .v-image:before {
  background: linear-gradient(225deg, #e25405 0%, #ca0316 100%), #ffffff;
}
.service-item .v-image .service-item-content {
  z-index: 100;
}
</style>
