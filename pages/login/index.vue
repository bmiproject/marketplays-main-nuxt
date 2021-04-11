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
            </div>
            <button
              v-google-signin-button="clientId"
              class="google-signin-button"
            >
              Login with Google
            </button>
          </form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import swal from 'sweetalert'
import Vue from 'vue'

import { forEach as _forEach } from 'lodash'
export default {
  name: 'Login',
  directives: {
    GoogleSignInButton,
  },

  data: () => ({
    clientId:
      '909448613494-5r28g6pdcuk1cbbghhs7f7vsh63v4ikf.apps.googleusercontent.com',
    form: {},
    showFeedback: false,
    feedback: {
      color: 'success',
      icon: 'check',
      message: ``,
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
        this.form = {}
        this.showFeedback = true
        this.$refs.observer.reset()
      }

      this.$vuetify.goTo('#login')
    },

    async submit() {
      await this.loginUser()
    },
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend

      // register user
      // todo
      console.log(idToken)
    },
    OnGoogleAuthFail() {},
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
8689
