<template>
    <section id="how-it-works-section" class="py-15">
        <v-responsive
            class="no-flex mx-auto"
            max-width="875px"
        >
            <v-row class="text-center">
                <v-col cols="12">
                    <h3 class="mt-5 mb-7">Risus, sapien placerat enim non eget monteshac amet sed purus porttitor elit</h3>
                    <p>Sed tristique augue aliquet ultrices. Sociis habitant faucibus purus etiam. Vel viverra diam tortor ullamcorper fringilla lacus scelerisque facilisi.</p>
                </v-col>
            </v-row>
        </v-responsive>

        <v-responsive
            class="no-flex mx-auto"
            :max-width="containerSize"
        >
            <v-row>
                <v-col
                    md="4"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <v-card
                        tile
                        class="py-10"
                    >
                        <v-img 
                            :src="item.icon"
                            max-width="64px"
                            class="mx-auto"
                        ></v-img>
                        <v-card-title >
                            <h5 
                                class="mx-auto mb-5"
                                v-text="item.title"
                            ></h5>
                        </v-card-title>
                        <v-card-text>
                            <p 
                                class="text-center"
                                v-html="item.content"
                            ></p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" class="text-center mt-5">
                    <v-btn 
                        color="primary" 
                        depressed
                    >
                        How it Works
                    </v-btn>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'how-it-works-section',
    data: () => ({
        items: [
            { icon: require('../../../assets/ecommerce/lock.png'), title: "Security Assurance", content: "Vulputate at quis et vitae ultricies in id. <br> Tempus felis sed dictum sapien morbi <br> ullamcorper mi, gravida fames." },
            { icon: require('../../../assets/ecommerce/headphone.png'), title: "Best Support", content: "Need help? We’re here for you! Questions <br> on your mind? Do not worry we provide in <br> depth answer." },
            { icon: require('../../../assets/ecommerce/payment.png'), title: "Payment simplified", content: "Nulla nisl mauris volutpat sed tellus <br> ipsum, ut a pharetra. Eget tincidunt nibh <br> sit velit tincidunt ipsum." },
        ]
    })
}
</script>
<style scoped>
    #how-it-works-section { background: url('../../../assets/ecommerce/howitworks.jpg'); }
</style>