<template>
    <section class="department-listing text-center pb-5">
        <div class="py-10">
            <h1 class="mb-3">Browse scelerisque sollicitudin by category</h1>
            <p class="mb-3">Find the right freelancer or agency for your project on the world’s largest hiring platform connecting savvy businesses and professional freelancers.</p>
            <a href="#"><v-icon color="primary" left>mdi-play-circle</v-icon>How Bickert Management Marketplace works</a>
        </div>

        <v-responsive 
            :max-width="containerSize" 
            class="mx-auto"
        >
            <v-row>
                <v-col
                    class="text-left d-flex mb-5"
                    cols="4" 
                    v-for="(item, index) in departments" 
                    :key="index"
                >
                    <v-hover v-slot:default="{ hover }">
                        <aside 
                            class="department-item py-5 px-7" 
                            style="width: 100%" 
                            :style="hover ? 'background: linear-gradient(225deg, #E25405 0%, #CA0316 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)' : ''"
                        >
                            <h4 
                                v-html="item.name"
                                class="mb-3"
                                :style="hover ? 'color: #fff': ''"
                            ></h4>
                            <v-divider class="mb-5" color="white"></v-divider>

                            <ul class="pl-0">
                                <li
                                    v-for="(item, index) in item.services"
                                    :key="index"
                                    class="ml-0 pl-0 mb-3"
                                >
                                    <NuxtLink :to="item.link || '#'" class="d-block" :style="hover ? 'color: #fff': ''">
                                        {{ item.name }}<v-icon right small :color="hover ? 'white' : 'primary'">mdi-arrow-right</v-icon>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </aside>
                        </v-hover>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
import DepartmentListing from '~/assets/sample-data/department-listing'
export default {
    name: 'department-listing',
    data: () => ({
        departments: DepartmentListing
    })
}
</script>
<style scoped>
    .department-listing { background: #ffffff }
    .department-item {
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    }
    ul { list-style: none; }
    ul > li > a .v-icon { float: right; }
    ul > li > a:hover { text-decoration: underline; }
</style>