<template>
  <section id="advanced-search-page">
    <v-responsive :max-width="containerSize" class="mx-auto">
      <v-row>
        <v-col cols="12" class="mt-5">
          <article class="pb-15 mb-15">
            <h1 class="text-center mt-5 mb-10">Advanced Search</h1>
            <v-row>
              <v-col cols="3">
                <aside>
                  <div class="mb-5">
                    <p class="mb-1">Keyword</p>
                    <v-text-field
                      v-model="form.name"
                      clear-icon="mdi-magnify"
                      class="rounded"
                      outlined
                      placeholder="Input Search"
                      hide-details
                    >
                      <template slot="prepend-inner">
                        <v-icon>mdi-magnify</v-icon>
                      </template>
                    </v-text-field>
                  </div>
                  <div class="mb-5">
                    <p class="mb-1">Department</p>
                    <v-select
                      v-model="form.department"
                      placeholder="Please select"
                      :items="departments"
                      item-text="name"
                      item-value="_id"
                      class="select-department pl-2"
                      solo
                      flat
                      style="border: 1px solid #e1e1e1"
                      hide-details
                    ></v-select>
                  </div>
                  <v-btn
                    block
                    color="primary"
                    x-large
                    @click.prevent="filterResult"
                  >
                    Filter
                  </v-btn>
                  <v-row v-if="hasFilterValue" class="mt-7" no-gutters>
                    <v-col cols="4">
                      <p v-if="filter.name" class="mb-0 smaller-font-size">
                        <strong>Keyword:</strong>
                      </p>
                    </v-col>
                    <v-col cols="8">
                      <p v-if="filter.name" class="mb-0 smaller-font-size">
                        {{ filter.name }}
                        <v-btn
                          icon
                          x-small
                          class="mt-n1"
                          @click.prevent="removeFilterValue('name')"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </p>
                    </v-col>
                    <v-col cols="4">
                      <p
                        v-if="departmentNameSelected"
                        class="mb-0 smaller-font-size"
                      >
                        <strong>Department:</strong>
                      </p>
                    </v-col>
                    <v-col cols="8">
                      <p
                        v-if="departmentNameSelected"
                        class="mb-0 smaller-font-size"
                      >
                        {{ departmentNameSelected }}
                        <v-btn
                          icon
                          x-small
                          class="mt-n1"
                          @click.prevent="removeFilterValue('department')"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </p>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                      <a
                        href="#"
                        class="text-uppercase font-weight-bold text-decoration-underline smaller-font-size"
                        @click.prevent="clearFilter"
                      >
                        Reset Filter
                      </a>
                    </v-col>
                  </v-row>
                </aside>
              </v-col>
              <v-col cols="9" class="pt-8 pl-15">
                <div v-if="services">
                  <article
                    v-for="(service, serviceIndex) in services"
                    :key="serviceIndex"
                    class="mb-10"
                  >
                    <h4 class="primary--text mb-4" v-text="service.name"></h4>
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <p>{{ service.description | truncate(150) }}</p>
                  </article>
                </div>
                <div v-else>
                  <p>
                    Welcome to advanced search option, introduction text ...
                  </p>
                </div>
                <v-divider class="mt-15"></v-divider>
              </v-col>
            </v-row>
          </article>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
import { find as _find, forEach as _forEach } from 'lodash'
export default {
  name: 'AdvancedSearch',
  layout: 'ecommerce',
  data: () => ({
    services: null,
    departments: [],
    form: {},
    filter: {},
    defaultFilterForm: {
      name: null,
      department: null,
    },
  }),
  computed: {
    hasFilterValue() {
      for (const key in this.filter) {
        if (this.filter && this.filter[key]) return true
      }
      return false
    },
    departmentNameSelected() {
      return this.filter.department
        ? _find(this.departments, (o) => o._id === this.filter.department).name
        : null
    },
  },
  mounted() {
    this.getList('departments', ['_id', 'name'])
    _forEach(Object.keys(this.defaultFilterForm), (key) => {
      this.$set(this.form, key, this.defaultFilterForm[key])
      this.$set(this.filter, key, this.defaultFilterForm[key])
    })
  },
  methods: {
    filterResult() {
      let filter = {}

      if (this.form) {
        const filtersQueryString = Object.keys(this.form).map((key) => {
          if (this.form[key]) return `${key}: "${this.form[key]}"`
        })

        filter = {
          filter: `{ ${filtersQueryString.join('\n')} }`,
        }
      }

      this.getList('services', ['name', 'slug', 'description'], filter)
      this.setFilterValues(this.form)
    },
    setFilterValues(values) {
      _forEach(values, (value, key) => {
        if (typeof this.filter[key] !== 'undefined') {
          this.filter[key] = value
        }
      })
    },
    clearFilter() {
      this.form = JSON.parse(JSON.stringify(this.defaultFilterForm))
      this.filterResult()
    },
    removeFilterValue(key) {
      this.form[key] = null
      this.filterResult()
    },
  },
}
</script>
