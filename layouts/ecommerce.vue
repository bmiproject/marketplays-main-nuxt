<template>
	<v-app :class="bodyClassName">
		<header-layout />
        <header-nav />
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-layout />
	</v-app>
</template>

<script>
import HeaderLayout from '~/components/Header'
import HeaderNav from '~/components/HeaderNav'
import FooterLayout from '~/components/Footer'
export default {
	name: 'default-template',
	components: {
		HeaderLayout,
        FooterLayout,
        HeaderNav
	},
	computed: {
		bodyClassName() {
			return this.$route.name ? this.$route.name.toLowerCase() : ""
		}
	},
};
</script>