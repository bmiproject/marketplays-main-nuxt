<template>
  <section id="single-service-page">
    <v-img
      :src="require('~/assets/images/ecommerce/single-service.jpg')"
    ></v-img>
    <v-responsive :max-width="containerSize" class="mx-auto">
      <v-row class="pt-10">
        <v-col cols="9" class="pr-5">
          <article class="pb-8">
            <v-row>
              <v-col cols="12">
                <h1 v-text="service.name"></h1>
              </v-col>
              <v-col cols="9" class="py-0">
                <NuxtLink
                  :to="service.department ? service.department.slug : ``"
                >
                  <v-btn
                    v-if="service.department"
                    color="#F4F4F4"
                    depressed
                    class="department-name mr-2"
                    small
                    v-text="service.department.name"
                  >
                  </v-btn>
                </NuxtLink>
                |
                <span class="smaller-font-size mx-2">
                  <strong>Service Code: </strong>
                  <span v-text="service.code"></span>
                </span>
                |
                <span
                  v-if="service.projectManager"
                  class="smaller-font-size mx-2"
                >
                  <strong>Product Manager: </strong>
                  <span v-text="service.projectManager.fullName"></span>
                </span>
              </v-col>
              <v-col class="py-0 text-right">
                <v-btn outlined small color="#555">
                  <v-icon small left color="#999">mdi-heart</v-icon>Save
                </v-btn>
                <v-btn outlined small color="#555">
                  <v-icon small left color="#219653">mdi-share-variant</v-icon
                  >Share
                </v-btn>
              </v-col>
            </v-row>
          </article>
          <v-divider color="#E1E1E1"></v-divider>
          <main class="py-5">
            <div class="py-5">
              <h5 class="mb-3">Description</h5>
              <!-- eslint-disable-next-line vue/no-v-html -->
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
                  <p class="my-0">{{ service.pricing | currency }}</p>
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
              depressed
              outlined
              rounded
              class="tag-item mr-2"
              small
              v-text="tagName"
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
import gql from 'graphql-tag'

export default {
  name: 'SingleService',
  apollo: {
    service: {
      query: gql`
        query getOneService($filter: FilterFindOneServiceInput) {
          getOneService(filter: $filter) {
            _id
            name
            code
            image
            description
            seoTitle
            seoDescription
            seoKeywords
            workforceThreshold
            pricing
            projectManager {
              fullName
            }
            department {
              name
              slug
            }
            tags
          }
        }
      `,
      variables() {
        return {
          filter: {
            slug: this.$route.params.service_slug,
          },
        }
      },
      update(data) {
        return data.getOneService
      },
    },
  },
  data: () => ({
    service: {},
  }),
  title: {
    head: 'Service',
  },
  layout: 'ecommerce',
}
</script>
<style scoped>
#single-service-page {
  padding-bottom: 100px;
}
#single-service-page .department-name {
  text-transform: none;
  color: #777777;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
}
.product-manager {
  font-size: 14px;
}
.tag-item {
  color: #be1e2d;
  border-color: #e1e1e1;
  text-transform: none;
  font-size: 14px;
  font-weight: 400;
}
</style>
