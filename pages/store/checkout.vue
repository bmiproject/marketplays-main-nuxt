<template>
  <section class="pb-15">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex mt-8 mb-15">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submit)">
          <v-row>
            <v-col cols="12">
              <h4 class="mb-2">Billing Details</h4>
            </v-col>
            <v-col cols="6" class="pr-10">
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
            </v-col>
            <v-col cols="6" class="pl-10">
              <v-card class="order-summary mt-8" elevation="0" outlined>
                <v-card-title class="px-8 pt-7 mb-3">
                  <h5>Order Summary</h5>
                </v-card-title>
                <v-card-text class="px-9">
                  <v-row v-for="(item, index) in cartItems" :key="index">
                    <v-col cols="9" class="">
                      <NuxtLink :to="item.slug || ``">
                        <v-img
                          :src="item.image || `/image-placeholder.jpg`"
                          class="item-image d-inline-block mr-2"
                          max-width="50px"
                          max-height="30px"
                        ></v-img>
                      </NuxtLink>
                      <p
                        class="item-name font-weight-bold larger-font-size d-inline-block mb-0"
                      >
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
                      <p class="mb-0">
                        {{ subscriptionTypeSelected.name }}
                        {{
                          `(${subscriptionTypeSelected.discountPercentage}%)`
                        }}
                      </p>
                    </v-col>
                    <v-col cols="2" class="text-right">
                      {{ subscriptionDiscountValue | currency }}
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions
                  class="mini-cart-footer px-8 py-3"
                  color="#f4f4f4"
                >
                  <v-row>
                    <v-col>
                      <h5 class="font-weight-bold text-left text-uppercase">
                        Total
                      </h5>
                    </v-col>
                    <v-col cols="6">
                      <h5 class="font-weight-medium text-right">
                        {{ subTotal | currency }}
                      </h5>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
              <article class="mt-15 payment-methods">
                <h4>Payment Method</h4>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Payment Method"
                  :rules="'required'"
                >
                  <v-radio-group
                    v-model="form.paymentMethod"
                    column
                    :error-messages="errors"
                  >
                    <v-radio
                      v-for="(item, index) in paymentMethods"
                      :key="index"
                      :value="item.value"
                      class="px-3 py-2 payment-item"
                      active-class="selected"
                      color="#1358B5"
                    >
                      <template slot="label">
                        <v-row no-gutters>
                          <v-col cols="7" class="pt-2">
                            {{ item.name }}
                          </v-col>
                          <v-col cols="5" class="text-right">
                            <img :src="item.icon" style="max-width: 100%" />
                          </v-col>
                        </v-row>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </ValidationProvider>
                <p class="smaller-font-size">
                  By clicking the button you agree to the
                  <NuxtLink to="#" class="text-underline">
                    terms and conditions
                  </NuxtLink>
                </p>
                <v-btn type="submit" block color="primary" large>Pay Now</v-btn>
                <p class="smaller-font-size text-center mt-2">
                  <v-icon left small>mdi-lock</v-icon> SSL Secure Payment
                </p>
              </article>
            </v-col>
          </v-row>
        </form>
      </ValidationObserver>
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
    paymentMethods: [
      { name: 'Credit Card', value: 'cc', icon: '/credit-cards.png' },
      { name: 'Paypal', value: 'paypal', icon: '/paypal.png' },
    ],
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
  methods: {
    submit() {},
  },
}
</script>
