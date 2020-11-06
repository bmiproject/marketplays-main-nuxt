<template>
    <section id="services-section">
        <div
            class="services-wrapper py-10"
            v-for="(item, index) in items"
            :key="index"
            :style="'background: ' + (item.bgColor ? item.bgColor : '#FFFFFF')"
        >
            <v-responsive 
                :max-width="containerSize"
                class="no-flex mx-auto"
            >
                <v-row>
                    <v-col md="6" v-if="item.layout == 'image-left'">
                        <v-img 
                            :src="item.image"
                            eager
                            contain
                        ></v-img>
                    </v-col>
                    <v-col md="6">
                        <v-card
                            tile
                            elevation="0"
                            color="transparent"
                        >
                            <v-card-title class="mt-10">
                                <h2 class="mb-3" v-html="item.title"></h2>
                            </v-card-title>
                            <v-card-subtitle v-if="item.subtitle">
                                <h4 class="mb-3 black--text font-weight-light" v-html="item.subtitle"></h4>
                            </v-card-subtitle>
                            <v-card-text v-if="item.content">
                                <p v-html="item.content"></p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    color="primary"
                                    style="font-size: 16px; letter-spacing: 0"
                                    :to="item.link"
                                >
                                    {{ item.btnLabel }} <v-icon right small>mdi-open-in-new</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col md="6" v-if="item.layout == 'image-right'">
                        <v-img 
                            :src="item.image"
                            eager
                            contain
                        ></v-img>
                    </v-col>
                </v-row>
            </v-responsive>
        </div>
    </section>
    
</template>
<script>
export default {
    name: 'services',
    computed: {
        items() {
            return [
                { bgColor: "#F5F5F5", image: require('../../../assets/service1.png'), layout: 'image-right', title: "Ecommerce Store", subtitle: "Services pellentesque pharetra morbi mi at massa in ac a vitae", content: "Pellentesque tempus hendrerit nisi lobortis quam sit ipsum fermentum. Enim sagittis, proin sed amet dignissim. Lacus lacinia vulputate fermentum amet, turpis sit at massa leo. Risus sed aenean sed molestie eleifend. Venenatis facilisi purus viverra etiam facilisi. Imperdiet ullamcorper mattis molestie orci, elementum arcu. <br> <br> Mattis pellentesque etiam urna, aliquet nunc tempor, aliquam faucibus. Habitant tempor odio donec id eu blandit magna. Sed posuere pellentesque praesent fringilla pellentesque scelerisque amet. Consequat habitasse arcu sed et integer quam pulvinar purus.", btnLabel: "Go to our Ecommerce Store", link: this.storeUrl },

                { bgColor: "#E5E5E5", image: require('../../../assets/service2.png'), layout: 'image-left', title: "TFP Job Listings", content: "Pellentesque tempus hendrerit nisi lobortis quam sit ipsum fermentum. Enim sagittis, proin sed amet dignissim. Lacus lacinia vulputate fermentum amet, turpis sit at massa leo. Risus sed aenean sed molestie eleifend. Venenatis facilisi purus viverra etiam facilisi. Imperdiet ullamcorper mattis molestie orci, elementum arcu.", btnLabel: "Check Our Job Listings" },

                { bgColor: "#F5F5F5", image: require('../../../assets/service3.png'), layout: 'image-right', title: "Business Community", subtitle: "Blogging Platform for the Business Owners/ Clients", content: "Lorem ipsum non, penatibus fames malesuada aliquet egestas pellentesque. Sed tellus vel facilisis urna sit volutpat justo nullam. Vivamus viverra faucibus pharetra eu pharetra, rutrum sit etiam tortor. <br><br> Pharetra blandit risus, risus lorem eros, aliquam leo et. Vel platea est aliquam tortor, dui mauris eget tincidunt. Integer ullamcorper et turpis risus id vestibulum.", btnLabel: "See our community" },

                { bgColor: "#EAEAEA", image: require('../../../assets/service4.png'), layout: 'image-left', title: "Our Weekly Webinars", subtitle: "Business owners/ clients can create/ schedule a webinar", content: "Consequat dolor, sed adipiscing dignissim a risus sagittis malesuada. Turpis ac scelerisque lectus pellentesque. Eu tortor quam nibh sit nulla id sed porta. Non arcu, at urna morbi. Porttitor tempus eget aliquam ornare ut at.", btnLabel: "See our weekly webinars" },
            ]
        }
    }
}
</script>