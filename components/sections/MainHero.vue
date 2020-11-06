<template>
    <section id="hero-section">
        <v-row no-gutters>
            <v-img
                gradient="to top right, rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 0.6)"
                :src="require('~/assets/images/hero.jpg')"
            >
                <v-theme-provider dark>
                    <v-container fill-height>
                        <v-row
                            align="center"
                            class="white--text mx-auto"
                            justify="center"
                        >
                            <v-col
                                class="white--text text-center "
                                cols="12"
                                tag="h1"
                            >
                                <span
                                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                    class="font-weight-light"
                                >
                                    UVP Title Headline Here
                                </span>
                                <p class="mt-5 font-weight-light mx-auto text-white" style="max-width: 900px">
                                    Turpis semper in iaculis eget turpis felis, cum rutrum. Quisque ac massa amet rutrum a, etiam porttitor. Elit, id turpis sit lectus nisl.
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-theme-provider>
            </v-img>
        </v-row>
    </section>
</template>
<script>
export default {
    name: 'hero-section'
}
</script>
<style scoped>
    p { color: #fff; font-size: 24px; line-height: 35px; }
</style>