<template>
  <section class="featured-service-by-category pt-15">
    <v-responsive :max-width="containerSize" class="mx-auto">
      <h3 class="text-center mb-3">Featured categories</h3>
      <p class="text-center mb-10">
        Purus nisl sagittis, nunc cras aliquam. Nascetur egestas accumsan eget
        mus mauris non elit. Malesuada pellentesque vulputate tellus praesent
        consequat.
      </p>
      <v-row>
        <v-col
          v-for="(item, index) in categories"
          :key="index"
          cols="12"
          class="featured-category-item mb-3 pa-0"
        >
          <v-row no-gutters>
            <v-col cols="4">
              <v-img
                :src="getServiceImage(item)"
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
                 :to="item.slug ? $nuxt.$route.path + '/' + item.slug : ''"                
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
  name: 'FeaturedServiceByCategory',
  data: () => ({
    categories: [],
  }),
  mounted() {
    debugger
    this.getList('categories', [
      '_id',
      'name',
      'slug',
      'description',
      `services {
        name
        slug
        files
      }`,
    ])
  },
  methods: {
      getServiceImage(item) {
      
      // this will return first image on the services;
      let images = []
      if (item && item.services && item.services.length > 0) {
        let servicesfiles = []
        item.services.forEach((x) => {
          servicesfiles = servicesfiles.concat(x.files);
        })
     
        images = servicesfiles.map(x => {
            if(x && x.urlResized)
            {
              return x.urlResized
            }
            if(x.url){
              return x.url
            }
          })
        
      }
      return images && images.length > 0 ? images[0] : '/image-placeholder.jpg'
    },
  },
}
</script>
<style scoped>
.featured-service-by-category {
  background: #f5f5f5;
}
.featured-category-item {
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px;
}
.featured-category-item:hover {
  background: linear-gradient(225deg, #e25405 0%, #ca0316 100%),
    linear-gradient(0deg, #ffffff, #ffffff);
}
.featured-category-item h4,
.featured-category-item p,
.featured-category-item .v-btn {
  transition: all ease 0.3s;
}
.featured-category-item .v-btn {
  border-color: #e1e1e1;
}
.featured-category-item:hover h4,
.featured-category-item:hover p,
.featured-category-item:hover .v-btn {
  color: #ffffff !important;
}
.featured-category-item .v-btn:hover {
  color: #be1e2d !important;
  background: #ffffff;
}
</style>
