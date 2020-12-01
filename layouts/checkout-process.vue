<template>
	<v-app :class="bodyClassName">
		<header-shop-layout />
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-shop-layout />
	</v-app>
</template>

<script>
import HeaderShopLayout from '~/components/HeaderShop'
import HeaderNav from '~/components/HeaderNav'
import FooterShopLayout from '~/components/FooterShop'
export default {
	name: 'checkout-process',
	components: {
		HeaderShopLayout,
        FooterShopLayout,
        HeaderNav
	},
	computed: {
		bodyClassName() {
			return this.$route.name ? this.$route.name.toLowerCase() : ""
		}
	},
};
</script>