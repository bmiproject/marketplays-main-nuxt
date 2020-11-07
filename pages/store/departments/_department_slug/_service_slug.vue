<template>
    <section id="single-service-page">
        <v-img :src="require('~/assets/images/ecommerce/single-service.jpg')"></v-img>
        <v-responsive
            :max-width="containerSize"
            class="mx-auto"
        >
            <v-row class="pt-10">
                <v-col cols="9" class="pr-5">
                    <article class="pb-8">
                        <v-row>
                            <v-col cols="12">
                                <h1 v-html="service.name"></h1>
                            </v-col>
                            <v-col cols="9" class="py-0">
                                <NuxtLink :to="departmentSlug">
                                    <v-btn
                                        color="#F4F4F4" 
                                        depressed 
                                        class="department-name mr-5"
                                        small
                                        v-text="service.department.name"
                                    >
                                    </v-btn>
                                </NuxtLink>
                                <span class="product-manager">
                                    <strong>Product Manager: </strong> <span v-text="service.projectManager.fullName"></span>
                                </span>
                            </v-col>
                            <v-col class="py-0 text-right">
                                <v-btn 
                                    outlined 
                                    small 
                                    color="#555"
                                >
                                    <v-icon small left color="#999">mdi-heart</v-icon>Save
                                </v-btn>
                                <v-btn 
                                    outlined 
                                    small 
                                    color="#555"
                                >
                                    <v-icon small left color="#219653">mdi-share-variant</v-icon>Share
                                </v-btn>
                            </v-col>
                        </v-row>
                    </article>
                    <v-divider color="#E1E1E1"></v-divider>
                    <main class="py-5">
                        <div class="py-5">
                            <h5 class="mb-3">Description</h5>
                            <p v-html="service.description"></p>
                        </div>
                        <v-divider color="#E1E1E1"></v-divider>
                        <div class="py-8">
                            <h5 class="mb-3">Additional Information</h5>
                            <v-row>
                                <v-col>
                                    <p class="my-0"><strong>Workforce Threshold:</strong></p>
                                    <p class="my-0" v-text="service.workforceThreshold"></p>
                                </v-col>
                                <v-col>
                                    <p class="my-0"><strong>Pricing:</strong></p>
                                    <p class="my-0">{{ service.pricing }}</p>
                                </v-col>
                            </v-row>
                        </div>
                    </main>
                    <v-divider color="#E1E1E1"></v-divider>
                    <div class="py-8">
                        <h5 class="mb-3">Tags</h5>
                        <v-btn 
                            v-for="(tagName, index) in service.tags" 
                            :key="index"
                            v-text="tagName"
                            depressed
                            outlined
                            rounded
                            class="tag-item mr-2"
                            small
                        ></v-btn>
                    </div>
                </v-col>
                <v-col cols="3" class="pl-5">
                    <single-service-sidebar />
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    title: {
        head: 'Service'
    },
    layout: 'ecommerce',
    name: 'single-service',
    data: () => ({
        service: {
            name: 'Front End Development',
            department: {
                slug: 'information-technology',
                name: 'Information Technology'
            },
            projectManager: {
                fullName: 'Kevin Jones'
            },
            description: `<p>Odio ac dapibus in sed nunc amet nibh porttitor. Nulla eget lacus, mi eget nibh felis. Tincidunt purus elementum nunc non. Posuere lorem vel molestie justo, est eu, tempus arcu et. Lacinia eu justo, duis enim, quis amet fermentum. Sit augue nam turpis elementum penatibus. Convallis turpis mattis faucibus a egestas turpis tristique amet vel. Mauris nec gravida neque vestibulum diam sit in mauris. Ut ullamcorper amet pretium amet vestibulum ornare diam pulvinar morbi. </p>
            <p>Pharetra orci posuere lectus volutpat. Diam sit duis in non vitae, ante id. Sed mauris faucibus metus malesuada quam laoreet mauris blandit. Sit velit a gravida pellentesque tristique odio. Pulvinar fusce senectus gravida lacinia vitae tortor, volutpat convallis tincidunt. Phasellus consectetur turpis imperdiet adipiscing aliquam cras magna iaculis. Aenean aenean scelerisque lacus, magna interdum in blandit. Id etiam tellus est vel at orci.</p>`,
            pricing: 1000,
            workforceThreshold: 100,
            shortDescription: "Pharetra orci posuere lectus volutpat. Diam sit duis in non vitae",
            tags: [
                "graphics",
                "seo",
                "web development",
                "web",
                "web design"
            ]
        }
    }),
    computed: {
        departmentSlug() {
            return this.service.department ? this.storeUrl + '/departments/' + this.service.department.slug : ''
        }
    }
}
</script>
<style scoped>
    #single-service-page { padding-bottom: 100px; }
    #single-service-page .department-name { text-transform: none; color: #777777; border-radius: 5px; font-size: 14px; font-weight: 400; letter-spacing: 0; }
    .product-manager { font-size: 14px; }
    .tag-item { color: #BE1E2D; border-color: #e1e1e1; text-transform: none; font-size: 14px; font-weight: 400; }
</style>