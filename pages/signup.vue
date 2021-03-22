<template>
  <section id="signup">
    <v-card
      elevation="2"
      max-width="600px"
      class="mx-auto mt-10"
      style="margin-bottom: 200px"
    >
      <v-card-title>
        <h3>Sign up</h3>
      </v-card-title>
      <v-card-text>
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <v-row>
              <v-col cols="12">
                <v-divider class="mb-5"></v-divider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Name"
                  :rules="'required'"
                >
                  <v-text-field
                    v-model="form.fullName"
                    :error-messages="errors"
                  >
                    <template slot="label">
                      Name <span class="red--text">*</span>
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
  }),
  methods: {
    async submit() {
      const allowedItems = this.getAllowedItems(this.form, [
        'fullName',
        'email',
        'password',
      ])

      let result = null
      if (this.user) {
        result = await this.updateMutation('User', allowedItems, this.user._id)
      } else {
        result = await this.createMutation('SignupUser', allowedItems, false)
      }

      if (result) {
        this.back()
        // eslint-disable-next-line no-undef
        swal({
          title: 'Success',
          icon: 'success',
          text: 'Admin User has been successfully saved',
        })
      }
    },
  }
}
</script>
