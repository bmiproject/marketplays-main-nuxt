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
      <v-card-text>
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <v-row>
              <v-col cols="12">
                <v-divider class="mb-5"></v-divider>
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
                  name="Phone"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.phoneNumber"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Phone <span class="red--text">*</span>
                    </template>
                  </v-text-field>
                </ValidationProvider>
                <v-text-field v-model="form.address">
                  <template slot="label">
                    Address <small>(optional)</small>
                  </template>
                </v-text-field>
                <v-select
                  v-model="form.access"
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
  }),
  methods: {
    back() {
      this.$router.push('/store')
    },
    async submit() {
      // const allowedItems = this.getAllowedItems(this.form, [
      //   'fullName',
      //   'email',
      //   'password',
      // ])
      // let result = null
      // if (this.user) {
      //   result = await this.updateMutation('User', allowedItems, this.user._id)
      // } else {
      //   result = await this.createMutation('SignupUser', allowedItems, false)
      // }
      // if (result) {
      //   this.back()
      //   // eslint-disable-next-line no-undef
      //   swal({
      //     title: 'Success',
      //     icon: 'success',
      //     text: 'Admin User has been successfully saved',
      //   })
      // }
    },
  },
}
</script>
