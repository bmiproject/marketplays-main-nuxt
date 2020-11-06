<template>
    <section class="featured-service-by-department py-15">
        <v-responsive 
            :max-width="containerSize"
            class="mx-auto"
        >
            <h3 class="text-center mb-3">Featured categories</h3>
            <p class="text-center mb-10">Purus nisl sagittis, nunc cras aliquam. Nascetur egestas accumsan eget mus mauris non elit. Malesuada pellentesque vulputate tellus praesent consequat.</p>
            <v-row>
                <v-col 
                    cols="12"
                    v-for="(item, index) in featuredDepartments"
                    :key="index"
                    class="featured-department-item mb-3 pa-0"
                >
                    <v-row no-gutters>
                        <v-col cols="4">
                            <v-img :src="item.image"></v-img>
                        </v-col>
                        <v-col class="pa-10">
                            <h4 class="mb-3" v-html="item.name"></h4>
                            <p class="mb-4" v-html="item.description"></p>
                            <v-btn 
                                v-for="(item, index) in item.services"
                                :key="index"
                                rounded 
                                outlined
                                v-html="item.name"
                                small
                                class="mr-2"
                                color="primary"
                            ></v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
import FeaturedDepartments from '~/assets/sample-data/featured-departments'
export default {
    name: 'featured-service-by-department',
    data: () => ({
        featuredDepartments: FeaturedDepartments
    })
}
</script>
<style scoped>
    .featured-service-by-department { background: #f5f5f5; }
    .featured-department-item { background: #ffffff; border: 1px solid #E1E1E1; box-sizing: border-box; border-radius: 5px; }
    .featured-department-item:hover {  background: linear-gradient(225deg, #E25405 0%, #CA0316 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF) }
    .featured-department-item h4, 
    .featured-department-item p, 
    .featured-department-item .v-btn { transition: all ease 0.3s; }
    .featured-department-item .v-btn { border-color: #E1E1E1 }
    .featured-department-item:hover h4, 
    .featured-department-item:hover p, 
    .featured-department-item:hover .v-btn { color: #ffffff !important; }
    .featured-department-item .v-btn:hover { color: #BE1E2D !important; background: #ffffff; }
</style>