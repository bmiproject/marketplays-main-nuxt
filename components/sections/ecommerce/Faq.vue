<template>
    <section id="faq-section" class="py-10" style="background: #F5F5F5">
        <v-responsive
            class="mx-auto no-flex" 
            max-width="980px"
        >
            <v-row>
                <v-col cols="12">
                    <h3 class="text-center font-weight-light mb-10">Frequently ask questions</h3>
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <v-expansion-panel-header>
                                <span v-html="item.title"></span>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p v-html="item.content"></p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'faq-section',
    data: () => ({
        items: [
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
            { title: 'Question heading here', content: "Odio accumsan malesuada cum at ac cras amet, sed dolor. Molestie id integer et et, consectetur etiam arcu. Dictumst vulputate aliquam felis mi faucibus donec. Suscipit turpis pellentesque ut mattis maecenas egestas pharetra, aliquet sodales. Aliquet magna integer nisl lorem egestas purus. In nunc malesuada vitae feugiat sociis a." },
        ]
    })
}
</script>
<style scoped>
    h3 { font-size: 36px }
    .v-expansion-panel-header { font-size: 20px; font-weight: 300; padding-top: 20px; padding-bottom: 20px; }
    .v-expansion-panel--active.v-item--active { margin-top: 20px; margin-bottom: 20px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.12);
border-radius: 5px; }
</style>