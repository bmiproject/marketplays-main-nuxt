<template>
    <section id="whats-great-section">
        <v-responsive
            :max-width="containerSize"
            class="mx-auto no-flex"
        >
            <v-row class="my-10" align-content="center">
                <v-col cols="12">
                    <h3 class="text-center font-weight-light mb-10">What's great about it</h3>
                </v-col>
                <v-col 
                    md="3"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <v-card
                        tile
                        elevation="0"
                    >
                        <v-img :src="item.image" width="64px" class="mx-auto mb-5"></v-img>
                        <v-card-title>
                            <h5 
                                class="mx-auto font-weight-light"
                                v-html="item.title"
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
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'whats-great-section',
    data: () => ({
        items: [
            { image: require('../../../assets/whatsgreat1.png'), title: 'Browse pool of talents', content: "Varius scelerisque arcu vestibulum facilisis. Pellentesque venenatis nec consequat vitae aenean." },
            { image: require('../../../assets/whatsgreat2.png'), title: 'Free webinar', content: "Vel ultrices morbi sed tellus enim sit. Etiam nunc sit tellus, enim, nulla eget nulla elementum tristique." },
            { image: require('../../../assets/whatsgreat3.png'), title: '24/7 support', content: "Etiam quis tempus dolor, id nisl vel sit. Sed mauris sed vitae rhoncus sit mauris, mus." },
            { image: require('../../../assets/whatsgreat4.png'), title: 'Pay for quality', content: "Erat interdum neque, morbi quam magna. Tincidunt in mi odio amet adipiscing pharetra etiam tortor, ipsum." },
        ]
    })
}
</script>
<style scoped>
    h3 { font-size: 36px; }
    h5 { font-size: 24px; }
    p { font-size: 14px; }
</style>