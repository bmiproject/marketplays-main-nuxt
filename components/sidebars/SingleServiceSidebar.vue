<template>
  <aside id="single-service-sidebar" class="pt-3">
    <v-btn
      block
      color="primary"
      x-large
      class="subscribe-btn"
      @click.prevent="addToCart"
    >
      Subscribe
    </v-btn>
    <div class="contact-us-cont px-5 py-3 my-5">
      <v-btn block class="contact-us-btn" tile depressed outlined color="#555"
        >Contact Us</v-btn
      >
    </div>
    <div class="search-cont pa-8 my-10">
      <h5>You can't find what you’re looking for?</h5>
      <v-text-field
        placeholder="Search"
        light
        filled
        background-color="#f4f4f4"
        width="230px"
        height="55px"
        hide-details
        class="mt-5 search-bar"
        outlined
      >
        <template slot="append">
          <v-btn
            tile
            color="primary"
            height="56px"
            width="54px"
            depressed
            class="search-button-icon"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <div class="my-10 divider-cont">
        <v-divider color="#E5E5E5"></v-divider>
        <span class="divider">or</span>
      </div>
      <div class="select-departments-cont">
        <v-select
          placeholder="Select Department"
          :items="departments"
          item-text="name"
          item-value="name"
          class="select-department"
          solo
          flat
          background-color="#f4f4f4"
          style="border: 1px solid #e1e1e1"
          hide-details
        ></v-select>
        <v-btn block color="#555555" dark class="mt-3">Search</v-btn>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: 'SingleServiceSidebar',
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    departments: [],
  }),
  mounted() {
    this.getList('departments', ['_id', 'name'])
  },
  methods: {
    addToCart() {
      this.$store.commit('updateCart', this.service)
      this.$router.push(`${this.storeUrl}/cart`)
    },
  }
}
</script>
<style scoped>
.subscribe-btn {
  font-size: 18px;
}
.subscribe-btn,
.contact-us-btn {
  letter-spacing: 0;
}
#single-service-sidebar .contact-us-cont {
  background: #f4f4f4;
  border-radius: 5px;
}
#single-service-sidebar .contact-us-cont .contact-us-btn {
  border-radius: 5px;
}
.search-cont {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
}
.search-cont .search-bar {
  border-color: #e1e1e1;
}
.search-cont .search-bar .search-button-icon {
  margin-top: -17px;
  margin-right: -13px;
  border-radius-top-right: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.search-cont .divider-cont {
  position: relative;
}
.search-cont .divider-cont .divider {
  position: absolute;
  top: -13px;
  background: #fff;
  width: 70px;
  left: 35%;
  text-align: center;
  color: #666;
}
</style>
