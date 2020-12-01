<template>
  <section>
    <v-responsive :max-width="containerSize" class="mx-auto no-flex my-5">
      <v-row>
        <v-col cols="12">
          <article>
            <h4>Shopping Cart</h4>
          </article>
        </v-col>
        <v-col cols="3">
          <aside class="subscription-types pa-3">
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
                    {{ `${item.name} (${item.discountPercentage}%)` }}
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
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'Cart',
  layout: 'checkout-process',
  data: () => ({
    form: {
      subscriptionType: null,
    },
    subscriptionTypes: [
      {
        _id: 1,
        name: 'One off purchases/Individual Purchases/Ala carte',
        discountPercentage: 10,
        description:
          'Aliquet senectus consectetur senectus proin sed imperdiet justo. Iaculis dignissim nullam lectus interdum.',
      },
      {
        _id: 2,
        name: 'Bundled packages',
        discountPercentage: 20,
        description:
          'Aliquet senectus consectetur senectus proin sed imperdiet justo. Iaculis dignissim nullam lectus interdum.',
      },
      {
        _id: 3,
        name: 'Departmental Subscription',
        discountPercentage: 30,
        description:
          'Aliquet senectus consectetur senectus proin sed imperdiet justo. Iaculis dignissim nullam lectus interdum.',
      },
      {
        _id: 4,
        name: 'Multi Departments Combo Subscription',
        discountPercentage: 40,
        description:
          'Aliquet senectus consectetur senectus proin sed imperdiet justo. Iaculis dignissim nullam lectus interdum.',
      },
      {
        _id: 5,
        name: 'Wellth management clients',
        discountPercentage: 50,
        description:
          'Aliquet senectus consectetur senectus proin sed imperdiet justo. Iaculis dignissim nullam lectus interdum.',
      },
    ],
  }),
}
</script>
