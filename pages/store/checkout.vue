<template>
  <section class="pb-15">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex mt-8 mb-15">
      <v-row>
        <v-col cols="12">
          <h4 class="mb-2">Billing Details</h4>
        </v-col>
        <v-col cols="6" class="pr-10">
          <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submit)">
              <ValidationProvider
                v-slot="{ errors }"
                name="First name"
                :rules="'required'"
              >
                <p class="mb-0">First name</p>
                <v-text-field
                  v-model="form.firstName"
                  :error-messages="errors"
                  outlined
                  class="mt-2"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Last name"
                :rules="'required'"
              >
                <p class="mb-0">Last name</p>
                <v-text-field
                  v-model="form.lastName"
                  :error-messages="errors"
                  outlined
                  class="mt-2"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Email address"
                :rules="'required|email'"
              >
                <p class="mb-0">Email address</p>
                <v-text-field
                  v-model="form.email"
                  :error-messages="errors"
                  outlined
                  class="mt-2"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Phone Number"
                :rules="'required'"
              >
                <p class="mb-0">Phone number</p>
                <v-text-field
                  v-model="form.phone"
                  :error-messages="errors"
                  outlined
                  class="mt-2"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Country"
                :rules="'required'"
              >
                <p class="mb-0">Country</p>
                <v-autocomplete
                  v-model="form.country"
                  :items="countries"
                  item-text="name"
                  item-value="code"
                  :error-messages="errors"
                  outlined
                  class="mt-2"
                ></v-autocomplete>
              </ValidationProvider>
              <v-row v-if="form.country">
                <v-col>
                  <ValidationProvider
                    v-if="states"
                    v-slot="{ errors }"
                    name="State"
                    :rules="'required'"
                  >
                    <p class="mb-0">State</p>
                    <v-autocomplete
                      v-model="form.state"
                      :items="states"
                      item-text="name"
                      item-value="code"
                      :error-messages="errors"
                      outlined
                      class="mt-2"
                    ></v-autocomplete>
                  </ValidationProvider>
                  <ValidationProvider
                    v-else
                    v-slot="{ errors }"
                    name="Province"
                    :rules="'required'"
                  >
                    <p class="mb-0">Province</p>
                    <v-text-field
                      v-model="form.province"
                      :error-messages="errors"
                      outlined
                      class="mt-2"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col>
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Zip/ Postal Code"
                    :rules="'required'"
                  >
                    <p class="mb-0">Zip/ Postal Code</p>
                    <v-text-field
                      v-model="form.zipCode"
                      :error-messages="errors"
                      outlined
                      class="mt-2"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>
            </form>
          </ValidationObserver>
        </v-col>
        <v-col cols="6" class="pl-10">
          <v-card class="order-summary" elevation="0" outlined>
            <v-card-title class="px-7 pt-7">
              <h5>Order Summary</h5>
            </v-card-title>
            <v-card-text class="px-7">
              <v-row v-for="(item, index) in cartItems" :key="index">
                <v-col cols="2" class="pr-0">
                  <v-img
                    :src="item.image || `/image-placeholder.jpg`"
                    class="item-image"
                    max-width="50px"
                    max-height="30px"
                  ></v-img>
                </v-col>
                <v-col cols="7" class="pl-0 ml-n3">
                  <p class="item-name font-weight-bold mt-1 larger-font-size">
                    <NuxtLink
                      :to="item.slug || ``"
                      v-text="item.name"
                    ></NuxtLink>
                  </p>
                </v-col>
                <v-col cols="3">
                  <p class="item-price text-right">
                    {{ item.pricing | currency }}
                  </p>
                </v-col>
              </v-row>
              <v-row class="subscription-type-selected">
                <v-col cols="10">
                  <p class="mb-2">
                    {{ subscriptionTypeSelected.name }}
                    {{ `(${subscriptionTypeSelected.discountPercentage}%)` }}
                  </p>
                </v-col>
                <v-col cols="2">
                  {{ subscriptionDiscountValue | currency }}
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="px-7">
              <v-row>
                <v-col>
                  <h5 class="font-weight-bold text-left text-uppercase">
                    Total
                  </h5>
                </v-col>
              </v-row>
              <v-col cols="6">
                <h5 class="font-weight-medium text-right">
                  {{ subTotal | currency }}
                </h5>
              </v-col>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
import { find as _find } from 'lodash'
import Countries from '@/assets/json/countries'

export default {
  name: 'Checkout',
  layout: 'checkout-process',
  data: () => ({
    form: {},
    countries: Countries,
  }),
  computed: {
    states() {
      const selectedCountry = _find(
        this.countries,
        (o) => o.code === this.form.country
      )
      return selectedCountry ? selectedCountry.states : null
    },
  },
  mounted() {
    this.$store.commit('setCheckProcessPage', 2)
  },
}
</script>
