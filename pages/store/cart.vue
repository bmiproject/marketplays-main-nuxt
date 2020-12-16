<template>
  <section class="pb-15">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex mt-8 mb-15">
      <v-row>
        <v-col cols="12">
          <article>
            <h4 class="mb-2">Shopping Cart</h4>
          </article>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <aside class="subscription-types px-3 pt-2">
            <v-radio-group v-model="form.subscriptionType" dense mandatory>
              <v-radio
                v-for="item in subscriptionTypes"
                :key="item._id"
                :value="item._id"
                color="#555555"
                active-class="selected"
              >
                <template slot="label">
                  <p class="mb-4" style="width: 100%">
                    {{ item.name }}
                    <span v-if="item.discountPercentage">
                      {{ `(${item.discountPercentage}%)` }}
                    </span>
                  </p>
                  <v-tooltip top max-width="225px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        x-small
                        icon
                        class="float-right d-inline-block"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-help-circle</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ item.description }}</span>
                  </v-tooltip>
                </template>
              </v-radio>
            </v-radio-group>
          </aside>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="8" class="pt-8 cart-items">
          <v-row v-if="!cartItems.length">
            <v-col cols="12">
              <no-data-message message="No items on the cart" />
            </v-col>
          </v-row>
          <v-row v-for="(item, index) in cartItems" :key="index">
            <v-col cols="2" class="pr-0">
              <v-img
                :src="item.image || `/image-placeholder.jpg`"
                class="item-image"
                max-width="100px"
              ></v-img>
            </v-col>
            <v-col cols="8" class="pl-0 ml-n3">
              <p class="item-name font-weight-bold mb-2">
                <NuxtLink :to="item.slug || ``" v-text="item.name"></NuxtLink>
              </p>
              <p class="mb-5">
                <span class="item-department px-2 py-1">{{
                  item.department.name
                }}</span>
              </p>
              <a
                class="remove-item text-decoration-underline"
                text
                x-small
                @click.prevent="removeCartItem(item)"
              >
                Remove
              </a>
            </v-col>
            <v-col cols="2">
              <p class="item-price text-right">{{ item.pricing | currency }}</p>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row class="subscription-type-selected">
            <v-col cols="11">
              <p class="font-weight-bold mb-2 text-uppercase">
                {{ subscriptionTypeSelected.name }}
              </p>
              <p
                v-for="(item, index) in subscriptionTypeSelected.services"
                :key="index"
                class="mb-0 service-item"
              >
                {{ item.name }}
              </p>
            </v-col>
            <v-col col="1">
              <p class="font-weight-bold">
                {{ subscriptionTypeSelected.discountPercentage }}%
              </p>
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row class="mb-5">
            <v-spacer></v-spacer>
            <v-col cols="6">
              <h5 class="text-right">
                Subtotal
                <strong class="ml-10 font-weight-bold">{{
                  subTotal | currency
                }}</strong>
              </h5>
            </v-col>
          </v-row>
          <v-row class="mt-8">
            <v-spacer></v-spacer>
            <v-col cols="5" class="text-center">
              <NuxtLink :to="`${storeUrl}/checkout`">
                <v-btn block dark large color="#111111">
                  Continue to Checkout
                </v-btn>
              </NuxtLink>
              <p class="smaller-font-size mt-10">You won't be charged yet</p>
              <v-img
                src="/credit-cards.png"
                max-width="235px"
                class="mx-auto"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
import swal from 'sweetalert'
import _map from 'lodash/map'
import _merge from 'lodash/merge'
import _find from 'lodash/find'
import _sumBy from 'lodash/sumBy'

export default {
  name: 'Cart',
  layout: 'checkout-process',
  data: () => ({
    form: {
      subscriptionType: null,
    },
    subscriptionTypes: [],
    subscriptionTypeSelected: {
      name: 'Departmental Subscription Discount',
      discountPercentage: '12',
      services: [
        { _id: 1001, name: 'Front end Development' },
        { _id: 1002, name: 'Web Development' },
        { _id: 1003, name: 'Web Design' },
        { _id: 1004, name: 'Database Administration' },
        { _id: 1005, name: 'ERP / CRM Software' },
        { _id: 1006, name: 'Information Security' },
        { _id: 1007, name: 'Network & System Administration' },
      ],
    },
  }),
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
    subscriptionTypeDetails() {
      /** Check if services inside the selected subscription type is already in the cart */
      const services = _map(
        this.subscriptionTypeSelected.services,
        (service) => {
          return _find(this.cartItems, (item) => {
            return item._id === service._id
          })
            ? _merge(service, { isInCart: true })
            : service
        }
      )

      return _merge(this.subscriptionTypeSelected, { services })
    },
    subTotal() {
      return _sumBy(this.cartItems, (o) => o.pricing)
    },
  },
  mounted() {
    this.getList('subscriptionTypes', ['_id', 'name', 'description'])
    this.$store.commit('setCheckProcessPage', 1)
  },
  methods: {
    removeCartItem(item) {
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this one',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$store.commit('removeCartItem', item)
        }
      })
    },
  },
}
</script>
