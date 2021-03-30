<template>
  <section id="signup" style="margin-bottom: 200px; z-index: 1000">
    <v-card elevation="2" max-width="600px" class="mx-auto mt-15">
      <v-card-title>
        <h3 class="mt-2 flex-sm-grow-1">Sign up as a Vendor</h3>
      </v-card-title>
      <v-card-text>
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <v-row>
              <v-col cols="12">
                <v-divider class="mb-5"></v-divider>
                <v-radio-group
                  v-model="form.hasExistingMarketplaysPlatform"
                  mandatory
                  label="Do you have an existing shop on this platform already?"
                >
                  <v-radio label="No" :value="false" class="mt-3"></v-radio>
                  <v-radio label="Yes" :value="true"></v-radio>
                </v-radio-group>
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
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Business Name"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.businessName"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Business Name <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Business Address"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.businessAddress"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Business Address <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Time Availability"
                  :rules="'required'"
                >
                  <p class="mt-10 mb-0">
                    Please specify a suitable time for a call back
                    <span class="red--text">*</span>
                  </p>
                  <datepicker
                    v-model="form.dateTimeForVerification"
                    :errors="errors"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>

            <div class="mt-2">
              <v-btn @click.prevent="back">cancel</v-btn>
              <v-btn color="primary" type="submit" class="float-right"
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
  name: 'VendorSignup',
  data: () => ({
    form: {},
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
        // 'hasExistingMarketplaysPlatform',
        'firstName',
        'middleName',
        'lastName',
        'email',
        'contactNumber',
        // 'businessName',
        // 'businessAddress',
        'dateTimeForVerification',
        // 'selfiePic',
      ])
      const result = await this.createMutation('Vendor', allowedItems)

      if (result) {
        this.form = {}
        // eslint-disable-next-line no-undef
        swal({
          title: 'You have registered in marketPlays as Vendor',
          icon: 'success',
          text: 'Please wait within 24 hours, marketPlays admin will contact you via email.',
        })
        this.$refs.observer.reset()
      }
    },
  },
}
</script>
