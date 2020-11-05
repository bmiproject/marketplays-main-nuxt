<template>
    <section id="sponsors-section">
        <v-responsive 
            class="no-flex mx-auto my-5" 
            max-width="800px" 
            align="center"
        >
            <v-row dense no-gutters>
                <v-col 
                    align-self="center"
                    v-for="(logo, index) in logos"
                    :key="index">
                    <v-card 
                        class="d-flex"
                        flat 
                        tile 
                    >
                        <v-img
                            :src="require('../../../assets/' + logo)"
                            max-width="150px" 
                            class="d-inline-block"
                        >
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'sponsors-section',
    data: () => ({
        logos: ['zoho.png', 'microsoft.png', 'hubspot.png', 'google.png']
    }),
}
</script>