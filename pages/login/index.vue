<template>
  <section id="login">
    <v-card
      elevation="2"
      max-width="500px"
      class="mx-auto mt-15"
      style="margin-bottom: 200px"
    >
      <v-card-title>
        <h3 class="mt-2 flex-sm-grow-1">Log In</h3>
        <div></div>
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
                  name="Password"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.password"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Password <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
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
import Vue from 'vue'
import { forEach as _forEach } from 'lodash'

export default {
  name: 'Login',
  data: () => ({
    form: {},
    showFeedback: false,
    feedback: {
      color: 'success',
      icon: 'check',
      message: ``,
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
    async loginUser() {
      const allowedItems = this.allowedItems(this.form, ['email', 'password'])

      const result = await this.$apollo
        .mutate({
          mutation: gql`
            mutation {
              LoginUser(record: {
                  email: "${allowedItems.email}",
                  password: "${allowedItems.password}",
                }) {
                record {
                  _id,
                  email
                }
              }
            }
          `,
          variables: {
            record: {
              allowedItems,
            },
          },
        })
        .then((response) => {
          return response.data.LoginUser.record
        })
        .catch(() => {
          swal({
            title: 'Error',
            icon: 'error',
            text: `Something went wrong while Login User`,
          })
          return false
        })
      if (result) {
      }

      this.$vuetify.goTo('#login')
    },

    async submit() {
      await this.loginUser()
      this.$router.push(this.storeUrl)
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
      this.$router.push(this.storeUrl)
      return result

      // todo redirect
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
