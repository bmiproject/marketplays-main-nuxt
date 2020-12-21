<template>
  <section class="pb-15">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex mt-8 mb-15">
      <v-row>
        <v-col cols="12">
          <h4 class="mb-5">My Orders</h4>
          <v-data-table
            :items="orders"
            :headers="headers"
            item-key="orderNumber"
          >
            <template slot="item.orderNumber" slot-scope="row">
              <NuxtLink :to="`${storeUrl}/user/orders/${row.item.orderNumber}`">
                {{ row.item.orderNumber }}
                <v-icon right small color="primary">mdi-open-in-new</v-icon>
              </NuxtLink>
            </template>
            <template slot="item.subscriptions" slot-scope="row">
              <div
                v-for="(orderline, orderlineIndex) in row.item.orderlines"
                :key="orderlineIndex"
              >
                <span
                  v-if="orderline.subscription"
                  v-text="`- ${orderline.subscription.subscriptionType.name}`"
                ></span>
              </div>
            </template>
            <template slot="item.totalAmount" slot-scope="row">
              {{ row.item.totalAmount | currency }}
            </template>
            <template slot="item.created" slot-scope="row">
              <date-format :date="row.item.created" />
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'MyOrders',
  layout: 'ecommerce',
  data: () => ({
    orders: [],
    headers: [
      {
        text: 'Order Number',
        align: 'start',
        value: 'orderNumber',
        width: '170px',
      },
      {
        text: 'Subscriptions',
        align: 'start',
        value: 'subscriptions',
        sortable: false,
      },
      { text: 'Total Amount', align: 'start', value: 'totalAmount' },
      {
        text: 'Purchase Date',
        align: 'start',
        value: 'created',
        width: '175px',
      },
    ],
  }),
  mounted() {
    this.getList('orders', [
      'orderNumber',
      'totalAmount',
      'created',
      `orderlines {
        subscription {
          subscriptionType {
            name
          }
        }
      }`,
    ])
  },
}
</script>
