<template>
    <section id="cta-section">
        <v-responsive 
            class="no-flex mx-auto mb-15" 
            :max-width="containerSize"
        >
            <v-row>
                <v-col
                    md="6" 
                    sm="12"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <v-card>
                        <v-img
                            :src="item.image"
                            class="white--text align-center px-8"
                            gradient="to right, #434128, rgba(67, 65, 40, 0)"
                        >
                            <v-card-title>
                                <h4 v-text="item.title"></h4>
                            </v-card-title>
                            <v-card-text v-html="item.content"></v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    color="white"
                                    small
                                >
                                    {{ item.btnLabel }}<v-icon right>mdi-open-in-new</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'cta-section',
    data: () => ({
        items: [
            { image: require('../../../assets/cta1.jpg'), title: 'Customer Story', content: "Varius scelerisque arcu vestibulum <br>facilisis. Pellentesque venenatis nec <br>consequat vitae aenean.", btnLabel: 'Read More', btnLink: '#' },
            { image: require('../../../assets/cta2.jpg'), title: 'Heading Title', content: "Varius scelerisque arcu vestibulum <br>facilisis. Pellentesque venenatis nec <br>consequat vitae aenean.", btnLabel: 'Contact Us', btnLink: '#' },
        ]
    })
}
</script>