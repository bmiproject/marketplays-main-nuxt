<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="pricing-section" class="pb-15">
    <v-responsive class="no-flex mx-auto" :max-width="containerSize">
      <v-row class="text-center mt-15 mb-5">
        <v-col cols="12">
          <h3 class="mb-5">Choose the offering that works best for you</h3>
          <p>
            Sed tristique augue aliquet ultrices. Sociis habitant faucibus purus
            etiam. Vel viverra diam tortor ullamcorper fringilla lacus<br />
            scelerisque facilisi.
          </p>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="4"
          class="d-flex align-stretch"
        >
          <v-card
            :class="{ 'py-10 mx-auto': true }"
            width="405px"
            :color="item.bestValue ? '#BE1E2D' : ''"
          >
            <v-card-title>
              <h4
                :class="{ 'mx-auto': true, 'white--text': item.bestValue }"
                v-text="item.title"
              ></h4>
            </v-card-title>

            <span v-if="item.bestValue" class="best-value-badge"
              >Best Value</span
            >

            <v-btn
              class="mb-5"
              :style="item.bestValue ? 'color: #BE1E2D' : ''"
              depressed
              :color="!item.bestValue ? 'primary' : 'white'"
              :outlined="!item.bestValue"
              v-text="item.titleBtnLabel"
            ></v-btn>
            <p
              :class="{ 'pricing-text': true, 'white--text': item.bestValue }"
              :style="item.pricingTextStyle"
              v-html="item.pricingText"
            ></p>
            <v-divider color="#E1E1E1" class="mt-10"></v-divider>
            <v-card-text>
              <div :class="{ 'content mt-5': true }" class="px-5">
                <p v-html="item.content"></p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="item.linkLabel"
                :to="item.link"
                class="mx-auto font-weight-bold"
                color="primary"
                text
                v-text="item.linkLabel"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <p style="font-size: 14px">
            * In porttitor arcu consectetur viverra mollis semper. Sed sagittis
            sem eget dui iaculis commodo sed fermentum velit.
          </p>
        </v-col>
      </v-row>
    </v-responsive>
  </section>
</template>
<script>
export default {
  name: 'PricingSection',
  data: () => ({
    items: [
      {
        title: 'Basic',
        titleBtnLabel: 'Select Basic',
        pricingText:
          "<span class='font-weight-bold primary--text'>$9.99</span>/month*",
        content:
          '<p>Verified work history and reviews</p><p>Unlimited proposals</p><p>Built-in collaboration tools and easy payments</p>',
      },
      {
        title: 'Standard',
        titleBtnLabel: 'Select Standard',
        pricingText: "<span class='font-weight-bold'>$19.99</span>/month*",
        content:
          "<p class='white--text'>Dedicated account managers to help you find and hire quality talent fast</p><p class='white--text'>Project tracking and collaboration tools for teams</p><p class='white--text'>Tailored search results featuring Top Rated and Rising Talent</p>",
        bestValue: true,
      },
      {
        title: 'Business',
        titleBtnLabel: 'Contact Us',
        pricingText: 'Price varies - contact us for a demo',
        pricingTextStyle:
          'font-size: 14px; margin-bottom: 45px; margin-top: 10px;',
        content:
          '<p>Proin blandit euismod ullamcorper tortor</p><p>Amet sed vestibulum enim ultrices semper pPorttitor at facilisis placeratnunc</p><p>Enim faucibus id in eget adipiscing risus in posuere cras</p><p>Mi in orci enim scelerisque vegestas integer aliquet augue ipsum elementum</p>',
        linkLabel: 'Learn more',
        link: '',
      },
    ],
  }),
}
</script>
<style>
#pricing-section {
  background: #f4f4f4;
}
#pricing-section .content {
  min-height: 205px;
}
#pricing-section p {
  font-size: 14px;
}
#pricing-section p.pricing-text {
  font-size: 24px;
}
#pricing-section .v-card {
  position: relative;
  overflow: hidden;
}
#pricing-section .v-card .best-value-badge {
  position: absolute;
  top: 25px;
  left: -40px;
  text-transform: uppercase;
  background: #fff;
  font-size: 11px;
  padding: 5px;
  padding-left: 16px;
  color: #be1e2d;
  font-weight: 600;
  transform: rotate(-45deg);
  width: 145px;
  text-align: center;
}
</style>
