<template>
    <section id="counters-section">
        <v-responsive 
            class="no-flex mx-auto mb-n10"
            :max-width="containerSize"
        >
            <v-row>
                <v-col
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <v-card
                        outlined
                        elevation="0"
                        class="text-center pb-3"
                    >
                        <v-card-title>
                            <h1 
                                v-text="item.value"
                                class="mx-auto mt-4"
                                style="color: #BE1E2D"
                            ></h1>
                        </v-card-title>
                        <v-card-text>
                            <p v-html="item.label"></p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'counters-section',
    data: () => ({
        items: [
            { label: 'Amazing Job', value: '2000+' },
            { label: 'Satisfied Customers', value: '200+' },
            { label: 'Team members', value: '24+' },
            { label: 'Arcu auctor sed', value: '24+' },
        ]
    })
}
</script>
<style scoped>
    #counters-section { position: relative; z-index: 1000; }
</style>