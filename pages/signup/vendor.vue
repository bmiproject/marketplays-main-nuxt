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
              <div
                id="google-signin-button"
                style="float: right; padding-right: 14px"
              ></div>
            </div>
          </form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </section>
</template>
<script>
import gql from 'graphql-tag'
import swal from 'sweetalert'
import { forEach as _forEach } from 'lodash'

export default {
  name: 'VendorSignup',
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
  mounted() {
    this.gapi = window.gapi
    if (this.gapi) {
      this.gapi.signin2.render('google-signin-button', {
        onsuccess: this.onSignIn,
      })
    }
  },
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
    onSignIn(googleUser) {
      // Useful data for your client-side scripts:
      const profile = googleUser.getBasicProfile()

      // console.log('ID: ' + profile.getId()) // Don't send this directly to your server!
      const fullName = profile.getName()
      const givenName = profile.getGivenName()
      const familyName = profile.getFamilyName()
      const imageURL = profile.getImageUrl()
      const email = profile.getEmail()
      // The ID token you need to pass to your backend:
      const idToken = googleUser.getAuthResponse().id_token
      const allowedItems = {
        fullName,
        givenName,
        familyName,
        imageURL,
        email,
        idToken,
      }

      const result = this.$apollo
        .mutate({
          mutation: gql`
        mutation {
          LoginViaGmail(record: {
            fullName:"${fullName}" ,
            givenName: "${givenName}" ,
            familyName:"${familyName}" ,
            imageURL: "${imageURL}" ,
            email: "${email}" ,
            idToken: "${idToken}" 
            }) {
            record {
              _id,
              email
            }
          }
        }
      `,
          variables: {
            record: allowedItems,
          },
        })
        .then((response) => {
          return response.data.LoginViaGmail.record
        })
        .catch(() => {
          swal({
            title: 'Error',
            icon: 'error',
            text: `Something went wrong while Login User`,
          })
          return false
        })
      return result
    },
    OnGoogleAuthFail() {},
  },
  head() {
    return {
      meta: [
        {
          name: 'google-signin-scope',
          content: 'profile email',
        },
        {
          name: 'google-signin-client_id',
          content:
            '909448613494-5r28g6pdcuk1cbbghhs7f7vsh63v4ikf.apps.googleusercontent.com',
        },
      ],
      script: [
        {
          src: 'https://apis.google.com/js/platform.js',
          defer: true,
          async: true,
        },
      ],
    }
  },
}
</script>