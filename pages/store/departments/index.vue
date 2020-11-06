<template>
    <v-responsive>
        <store-department-listing />
        <store-featured-service-by-department style="padding-bottom: 150px;" />
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