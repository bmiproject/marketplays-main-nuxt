<template>
    <section id="single-department">
        <article class="text-center my-10">
            <h1>Information technology</h1>
            <p>Eu ac enim nec, pulvinar amet elit ut sit fames. Elit lacus, nisi, volutpat morbi nullam amet leo elementum at. Sed velit in faucibus sodales sit commodo vivamus.</p>
        </article>
        <store-services-grid />
        <store-counters />
        <store-pricing style="margin-top: -100px; padding-top: 80px" />
        <store-testimonials />
    </section>
</template>
<script>
export default {
    head: {
        title: 'Department'
    },
    layout: 'ecommerce',
    name: 'single-department',
    mounted() {
        console.log(this.$route.params.slug)
    }
}
</script>