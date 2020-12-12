<template>
  <v-alert prominent text :type="type">
    {{ message }}
  </v-alert>
</template>
<script>
export default {
  name: 'NoDataMessage',
  props: {
    type: {
      type: String,
      default: 'warning',
    },
    message: {
      type: String,
      default: 'No Data Available',
    },
  },
}
</script>
