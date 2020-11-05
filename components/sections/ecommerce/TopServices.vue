<template>
    <section id="categories-section" class="pb-15">
        <v-responsive
            class="no-flex mx-auto"
            :max-width="containerSize"
        >
            <v-row>
                <v-col cols="12" class="mt-15 mb-8 text-center">
                    <h3>Browse top services</h3>
                </v-col>
                <v-col 
                    md="3"
                    v-for="(item, index) in items"
                    :key="index"
                    class="py-2"
                >
                    <v-btn 
                        text
                        class="text-capitalize"
                        x-small
                        style="font-size: 16px; color: #555"
                    >
                        <v-icon left color="primary" small>mdi-arrow-right</v-icon> {{ item.label }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'top-services-section',
    data: () => ({
        items: [
            { label: 'PHP' },
            { label: 'Graphic Design' },
            { label: 'Website Design' },
            { label: 'HTML' },
            { label: 'Logo Design' },
            { label: 'Photoshop' },
            { label: 'WordPress' },
            { label: 'Article Writing' },
            { label: 'Javascript' },
            { label: 'Mobile App Development' },
            { label: 'Software Architecture' },
            { label: 'Data Entry' },
            { label: 'Android' },
            { label: 'Excel' },
            { label: 'CSS' },
            { label: 'HTML5' },
            { label: 'Internet Marketing' },
            { label: 'Copywriting' },
            { label: 'SEO' },
            { label: 'iPhone' },
            { label: 'Research Writing' },
            { label: 'Translation' },
            { label: 'Java' },
            { label: 'MySQL' },
            { label: 'Ghostwriting' },
            { label: 'Marketing' },
            { label: 'Data Processing' },
            { label: 'Technical Writing' },
            { label: 'Python' },
            { label: 'Social Media Marketing' },
            { label: 'Research' },
            { label: 'Link Building' },
            { label: 'C# Programming' },
            { label: '3D Modelling' },
            { label: 'Web Search' },
            { label: 'Web Scraping' },
            { label: '3D Rendering' },
            { label: 'Linux' },
            { label: 'Video Services' },
            { label: 'C++ Programming' },
            { label: 'eCommerce' },
            { label: 'Banner Design' },
            { label: 'Illustration' },
            { label: 'Proofreading' },
            { label: '3D Animation' },
            { label: 'Content Writing' },
            { label: 'See All' },
        ]
    })
}
</script>