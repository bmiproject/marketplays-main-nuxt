<template>
    <v-responsive>
        <department-listing />
        <featured-service-by-department />
    </v-responsive>
</template>
<script>
export default {
    head: {
        title: 'Departments'
    },
    layout: 'ecommerce',
    name: 'departments',
}
</script>