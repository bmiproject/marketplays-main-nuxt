<template>
  <section class="pb-15">
    <v-responsive :max-width="containerSize" class="mx-auto no-flex mt-8 mb-15">
      <v-row>
        <v-col cols="12">
          <NuxtLink :to="`${storeUrl}/user/orders`">
            <v-btn class="mb-3" outlined>
              <v-icon left>mdi-arrow-left</v-icon> Back to My Orders
            </v-btn>
          </NuxtLink>
          <v-card class="mt-3">
            <v-card-title>Order Details</v-card-title>
            <v-divider />
            <v-card-text>
              <p class="mt-3">
                <strong>Order #: </strong>{{ order.orderNumber }}
                <br />
                <strong>Date Created: </strong>
                <date-format :date="order.created"></date-format>
                <br />
                <strong>Date Modified: </strong>
                <date-format :date="order.changed"></date-format>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="">
            <v-card-title>Orderlines</v-card-title>
            <v-divider />
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Orderline #</th>
                      <th class="text-left">Subscription</th>
                      <th class="text-left">Unit Price</th>
                      <th class="text-left">Quantity</th>
                      <th class="text-left">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="orderlineItem in order.orderlines"
                      :key="orderlineItem._id"
                    >
                      <td>{{ orderlineItem.orderlineNumber }}</td>
                      <td>
                        <p class="mt-5 font-weight-bold">
                          {{ orderlineItem.subscription.subscriptionType.name }}
                        </p>
                        <p
                          v-for="serviceItem in orderlineItem.subscription
                            .services"
                          :key="serviceItem._id"
                          class="my-0"
                        >
                          - {{ serviceItem.name }}
                        </p>
                        <br />
                      </td>
                      <td>{{ orderlineItem.unitPrice | currency }}</td>
                      <td>{{ orderlineItem.quantity }}</td>
                      <td>{{ orderlineItem.totalPrice | currency }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer></v-spacer>
              <h5 class="font-weight-bold text-left text-uppercase my-5 mr-5">
                Total: {{ order.totalAmount | currency }}
              </h5>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
import gql from 'graphql-tag'
export default {
  name: 'OrderDetails',
  data: () => ({
    order: {},
  }),
  apollo: {
    order: {
      query: gql`
        query getOneOrder($filter: FilterFindOneOrderInput) {
          getOneOrder(filter: $filter) {
            orderNumber
            totalAmount
            created
            changed
            orderlines {
              _id
              orderlineNumber
              subscription {
                _id
                subscriptionType {
                  name
                }
                services {
                  _id
                  name
                  pricing
                }
                totalPrice
                serviceRequests {
                  _id
                  jobs {
                    title
                  }
                }
              }
              unitPrice
              quantity
              totalPrice
              sort
            }
          }
        }
      `,
      variables() {
        return {
          filter: {
            orderNumber: this.$route.params.orderNumber,
          },
        }
      },
      update(data) {
        return data.getOneOrder
      },
    },
  },
}
</script>
