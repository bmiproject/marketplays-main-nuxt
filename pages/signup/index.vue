<template>
  <section id="signup">
    <v-card
      elevation="2"
      max-width="500px"
      class="mx-auto mt-15"
      style="margin-bottom: 200px"
    >
      <v-card-title>
        <h3 class="mt-2 flex-sm-grow-1">Sign up</h3>
        <div>
          <nuxt-link text to="/signup/vendor" type="primary" class="body-2">
            Become a vendor
          </nuxt-link>
        </div>
      </v-card-title>
      <v-card-text class="mt-3">
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <v-row>
              <v-col cols="12">
                <v-divider class="mb-5"></v-divider>
                <v-alert
                  v-show="showFeedback"
                  dismissible
                  :color="feedback.color"
                  border="left"
                  elevation="2"
                  colored-border
                  :icon="`mdi-${feedback.icon}`"
                >
                  <span v-html="feedback.message"></span>
                </v-alert>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="First name"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.firstName"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      First name <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Last name"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.lastName"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Last name <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Middle name"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.middleName"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Middle name <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Email"
                  :rules="'required|email'"
                >
                  <v-text-field v-model="form.email" :error-messages="errors">
                    <template slot="label">
                      Email <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Contact Number"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.contactNumber"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Contact Number <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <v-text-field v-model="form.address">
                  <template slot="label">
                    Address <small>(optional)</small>
                  </template>
                </v-text-field>
                <v-select
                  v-model="form.interestedIn"
                  :items="accessItems"
                  attach
                  chips
                  label="Interested in:"
                  multiple
                  item-text="label"
                  item-value="value"
                ></v-select>
              </v-col>
            </v-row>

            <div class="mt-2">
              <v-btn @click.prevent="back">cancel</v-btn>
              <v-btn
                color="primary"
                type="submit"
                class="float-right"
                :disabled="isLoading"
                >Submit</v-btn
              >
            </div>
          </form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </section>
</template>
<script>
import { forEach as _forEach } from 'lodash'
export default {
  name: 'Signup',
  data: () => ({
    form: {},
    accessItems: [
      {
        label: 'Buying',
        value: 'store',
      },
      {
        label: 'Teaching or Working',
        value: 'tfps',
      },
    ],
    showFeedback: false,
    feedback: {
      color: 'success',
      icon: 'check',
      message: `You have registered in marketPlays. <br />Please check your email for
          confirmation.`,
    },
  }),
  methods: {
    back() {
      this.$router.push('/store')
    },
    allowedItems(item, field) {
      const updatedItem = {}
      _forEach(Object.keys(item), (key) => {
        if (field.includes(key)) {
          updatedItem[key] = item[key]
        }
      })

      return updatedItem
    },
    async submit() {
      const allowedItems = this.allowedItems(this.form, [
        'firstName',
        'lastName',
        'middleName',
        'email',
        'contactNumber',
        'address',
        'interestedIn',
      ])

      const result = await this.createMutation('Customer', allowedItems, {
        customErrorMessage:
          'There was an error while registering your account.',
      })

      if (result) {
        this.form = {}
        // eslint-disable-next-line no-undef
        this.showFeedback = true
        this.$refs.observer.reset()
      }
      this.$vuetify.goTo('#signup')
    },
  },
}
</script>
