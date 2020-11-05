<template>
	<v-app :class="bodyClassName">
		<header-layout />
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-layout />
	</v-app>
</template>

<script>
import HeaderLayout from '~/components/Header'
import FooterLayout from '~/components/Footer'
export default {
	name: 'default-template',
	components: {
		HeaderLayout,
		FooterLayout
	},
	computed: {
		bodyClassName() {
			return this.$route.name ? this.$route.name.toLowerCase() : ""
		}
	},
};
</script>