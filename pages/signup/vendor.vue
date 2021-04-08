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
                  name="Phone Number"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.phoneNumber"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Phone Number <span class="red--text">*</span>
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

          <button
            v-google-signin-button="clientId"
            class="google-signin-button"
          >
            Login with Google
          </button>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </section>
</template>
<script>
import { forEach as _forEach } from 'lodash'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  name: 'VendorSignup',
  directives: {
    GoogleSignInButton,
  },
  data: () => ({
    clientId: 'Your_Google_Client-Id',
    form: {},
    showFeedback: false,
    feedback: {
      color: 'success',
      icon: 'check',
      message: `You have registered as a Vendor. Please wait within 24 hours. <br />marketPlays admin will contact you via email.`,
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
        // 'hasExistingMarketplaysPlatform',
        'firstName',
        'middleName',
        'lastName',
        'email',
        'contactNumber',
        'phoneNumber',
        'businessName',
        'businessAddress',
        'dateTimeForVerification',
        // 'selfiePic',
      ])
      const result = await this.createMutation('Vendor', allowedItems, {
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
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      console.log(idToken)
    },
    OnGoogleAuthFail(error) {
      console.log(error)
    },
  },
}
</script>
<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
