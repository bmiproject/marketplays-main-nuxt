<template>
    <section id="single-department">
        <pricing />
    </section>
</template>
<script>
export default {
    head: {
        title: 'Department'
    },
    name: 'single-department',
    mounted() {
        console.log(this.$route.params.slug)
    }
}
</script>