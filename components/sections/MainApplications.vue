<template>
  <section id="marketplays-applications-section">
    <v-responsive class="no-flex mx-auto mt-n10" :max-width="containerSize">
      <v-container class="mt-n3" fluid>
        <v-row>
          <v-col v-for="item in items" :key="item.name" md="3">
            <v-hover v-slot:default="{ hover }">
              <NuxtLink :to="item.link || ''">
                <v-card outlined class="py-2" :style="injectStyle(hover)">
                  <v-card-title>
                    <h5
                      :class="{
                        'font-weight-light d-block': true,
                        'white--text': hover,
                      }"
                    >
                      {{ item.title }}
                    </h5>
                  </v-card-title>
                  <v-divider
                    class="mx-4 mb-2"
                    :color="hover ? 'white' : ''"
                  ></v-divider>
                  <v-card-text>
                    <p
                      :class="{ 'white--text': hover }"
                      style="max-width: 235px"
                      v-text="item.content"
                    ></p>
                  </v-card-text>
                  <v-card-actions>
                    <NuxtLink
                      :to="item.link || '#'"
                      style="text-decoration: none"
                    >
                      <v-btn
                        :class="{
                          'font-weight-bold': true,
                          'white--text': hover,
                        }"
                        :color="hover ? 'white' : 'primary'"
                        text
                        light
                        v-text="item.btnLabel"
                      >
                      </v-btn>
                    </NuxtLink>
                  </v-card-actions>
                </v-card>
              </NuxtLink>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'MarketplaysApplicationsSection',
  computed: {
    items() {
      return [
        {
          name: 'ecommerce-store',
          title: 'Ecommerce Store',
          content:
            'Vitae vitae felis euismod egestas eu urna sed. Ac, aliquam pellentesque enim nunc.',
          btnLabel: 'Explore',
          link: this.storeUrl,
        },
        {
          name: 'tfp-job-listing',
          title: 'TFP Job Listings',
          content:
            'Vitae vitae felis euismod egestas eu urna sed. Ac, aliquam pellentesque enim nunc.',
          btnLabel: 'Explore',
        },
        {
          name: 'business-community',
          title: 'Business Community',
          content:
            'Vitae vitae felis euismod egestas eu urna sed. Ac, aliquam pellentesque enim nunc.',
          btnLabel: 'Explore',
        },
        {
          name: 'weekly-webinars',
          title: 'Weekly Webinars',
          content:
            'Vitae vitae felis euismod egestas eu urna sed. Ac, aliquam pellentesque enim nunc.',
          btnLabel: 'Explore',
        },
      ]
    },
  },
  methods: {
    injectStyle(hovered) {
      return hovered
        ? `background: linear-gradient(225deg, #E25405 0%, #CA0316 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)`
        : ''
    }
  },
}
</script>
