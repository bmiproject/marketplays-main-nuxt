<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="testimonials-section">
    <v-row no-gutters>
      <v-img
        :src="require('~/assets/images/ecommerce/testimonial-back.jpg')"
        class="py-15 pb-xl-0"
      >
        <v-responsive class="no-flex mx-auto" :max-width="containerSize">
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col
              class="white--text text-center"
              cols="12"
              style="z-index: 1000"
            >
              <h3 class="my-10">What People Say</h3>
              <VueSlickCarousel v-bind="slickOptions">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  :data-index="index"
                  :data-name="index"
                >
                  <v-img
                    v-if="item.avatar"
                    :src="item.avatar"
                    max-width="100px"
                    class="mx-auto"
                  ></v-img>
                  <p
                    style="font-size: 20px"
                    class="my-10 white--text"
                    v-html="item.content"
                  ></p>
                  <p class="white--text mb-0">
                    <strong v-text="item.name"></strong><br />
                    <span v-text="item.position"></span>
                  </p>
                </div>
              </VueSlickCarousel>
            </v-col>
          </v-row>
        </v-responsive>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data: () => ({
    slickOptions: {
      dots: true,
      dotsClass: 'slick-dots custom-dot-class',
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    },
    items: [
      {
        avatar: require('~/assets/images/ecommerce/avatar.png'),
        name: 'Josh Adams',
        position: 'Director',
        content:
          'Adipiscing parturient vitae egestas eu fringilla ultricies at. Lacus, elit phasellus placerat aenean ultrices consequat <br> neque gravida. Nunc pellentesque orci, pharetra ipsum. Donec convallis egestas id malesuada est ultrices volutpat. <br> Non sit id adipiscing ullamcorper eu maecenas eget nunc, magna. Aliquet sem ut elementum orci, vitae erat et <br> sapien nec. Est nunc velit ut ac ac aliquam aliquam dignissim tortor.',
      },
      {
        avatar: require('~/assets/images/ecommerce/avatar.png'),
        name: 'Josh Adams',
        position: 'Director',
        content:
          'Adipiscing parturient vitae egestas eu fringilla ultricies at. Lacus, elit phasellus placerat aenean ultrices consequat <br> neque gravida. Nunc pellentesque orci, pharetra ipsum. Donec convallis egestas id malesuada est ultrices volutpat. <br> Non sit id adipiscing ullamcorper eu maecenas eget nunc, magna. Aliquet sem ut elementum orci, vitae erat et <br> sapien nec. Est nunc velit ut ac ac aliquam aliquam dignissim tortor.',
      },
      {
        avatar: require('~/assets/images/ecommerce/avatar.png'),
        name: 'Josh Adams',
        position: 'Director',
        content:
          'Adipiscing parturient vitae egestas eu fringilla ultricies at. Lacus, elit phasellus placerat aenean ultrices consequat <br> neque gravida. Nunc pellentesque orci, pharetra ipsum. Donec convallis egestas id malesuada est ultrices volutpat. <br> Non sit id adipiscing ullamcorper eu maecenas eget nunc, magna. Aliquet sem ut elementum orci, vitae erat et <br> sapien nec. Est nunc velit ut ac ac aliquam aliquam dignissim tortor.',
      },
    ],
  }),
}
</script>
<style scoped>
#testimonials-section {
  position: relative;
  z-index: 100;
}
#testimonials-section > .row > .v-image {
  position: relative;
}
#testimonials-section > .row > .v-image:before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
}
</style>
<style>
.VueCarousel-dot {
  position: relative;
}
.VueCarousel-dot:before {
  content: '';
  display: block;
  position: absolute;
  top: 6px;
  left: 6px;
  width: 18px;
  height: 18px;
  background: transparent;
  border-radius: 50%;
}
.VueCarousel-dot.VueCarousel-dot--active:before {
  background: rgba(204, 204, 204, 0.4);
}
</style>
