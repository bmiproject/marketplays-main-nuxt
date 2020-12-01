<template>
  <section id="counters-section">
    <v-responsive class="no-flex mx-auto mb-n10" :max-width="containerSize">
      <v-row>
        <v-col v-for="(item, index) in items" :key="index">
          <v-card outlined elevation="0" class="text-center pb-3">
            <v-card-title class="pb-0">
              <h1
                class="mx-auto mt-4"
                style="color: #be1e2d"
                v-text="item.value"
              ></h1>
            </v-card-title>
            <v-card-text>
              <p v-text="item.label"></p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'CountersSection',
  data: () => ({
    items: [
      { label: 'Amazing Job', value: '2000+' },
      { label: 'Satisfied Customers', value: '200+' },
      { label: 'Team members', value: '24+' },
      { label: 'Arcu auctor sed', value: '24+' },
    ],
  }),
}
</script>
<style scoped>
#counters-section {
  position: relative;
  z-index: 1000;
}
</style>
