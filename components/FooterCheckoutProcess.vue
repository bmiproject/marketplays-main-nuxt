<template>
  <footer id="footer">
    <div class="footer-cont">
      <section id="footer-bottom">
        <v-responsive
          class="no-flex mx-auto py-5 px-3 footer-bottom-wrapper"
          :max-width="containerSize"
        >
          <p class="text-center">
            &copy; Copyright {{ new Date().getFullYear() }} - Bickert Management
            Inc. Marketplace. All right reserved.
          </p>
        </v-responsive>
      </section>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterCheckoutProcessLayout',
}
</script>
<style scoped>
p {
  margin-bottom: 0;
  font-size: 14px;
}
</style>
