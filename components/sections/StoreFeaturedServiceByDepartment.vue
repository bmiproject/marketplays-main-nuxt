<template>
  <section class="featured-service-by-department pt-15">
    <v-responsive :max-width="containerSize" class="mx-auto">
      <h3 class="text-center mb-3">Featured categories</h3>
      <p class="text-center mb-10">
        Purus nisl sagittis, nunc cras aliquam. Nascetur egestas accumsan eget
        mus mauris non elit. Malesuada pellentesque vulputate tellus praesent
        consequat.
      </p>
      <v-row>
        <v-col
          v-for="(item, index) in departments"
          :key="index"
          cols="12"
          class="featured-department-item mb-3 pa-0"
        >
          <v-row no-gutters>
            <v-col cols="4">
              <v-img
                :src="item.image || '/image-placeholder.jpg'"
                max-height="300px"
                max-width="450px"
              ></v-img>
            </v-col>
            <v-col class="pa-10">
              <h4 class="mb-3" v-text="item.name"></h4>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="mb-4" v-html="item.description"></p>
              <v-btn
                v-for="(service, serviceIndex) in item.services"
                :key="serviceIndex"
                small
                class="mr-2"
                color="primary"
                rounded
                outlined
                v-text="service.name"
              ></v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'FeaturedServiceByDepartment',
  data: () => ({
    departments: [],
  }),
  mounted() {
    this.getList('departments', [
      '_id',
      'name',
      'slug',
      'description',
      `services {
        name
        slug
      }`,
    ])
  },
}
</script>
<style scoped>
.featured-service-by-department {
  background: #f5f5f5;
}
.featured-department-item {
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px;
}
.featured-department-item:hover {
  background: linear-gradient(225deg, #e25405 0%, #ca0316 100%),
    linear-gradient(0deg, #ffffff, #ffffff);
}
.featured-department-item h4,
.featured-department-item p,
.featured-department-item .v-btn {
  transition: all ease 0.3s;
}
.featured-department-item .v-btn {
  border-color: #e1e1e1;
}
.featured-department-item:hover h4,
.featured-department-item:hover p,
.featured-department-item:hover .v-btn {
  color: #ffffff !important;
}
.featured-department-item .v-btn:hover {
  color: #be1e2d !important;
  background: #ffffff;
}
</style>
