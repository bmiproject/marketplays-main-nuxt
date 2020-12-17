<template>
  <v-alert prominent text :type="type" light :color="color">
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
    color: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: 'No Data Available',
    },
  },
}
</script>
