<template>
	<div id="home">
		<hero-section />
		<sponsors-section />
		<how-it-works-section />
		<information-section />
		<counters-section />
		<testimonials-section />
		<pricing-section />
		<top-services-section />
	</div>
</template>

<script>
import HeroSection from '~/components/sections/ecommerce/Hero'
import SponsorsSection from '~/components/sections/ecommerce/Sponsors'
import HowItWorksSection from '~/components/sections/ecommerce/HowItWorks'
import InformationSection from '~/components/sections/ecommerce/Information'
import CountersSection from '~/components/sections/ecommerce/Counters'
import TestimonialsSection from '~/components/sections/ecommerce/Testimonials'
import PricingSection from '~/components/sections/ecommerce/Pricing'
import TopServicesSection from '~/components/sections/ecommerce/TopServices'

export default {
    head: {
		title: 'Store', 
	},
	layout: 'ecommerce',
	name: 'Home',
	components: {
		HeroSection,
		SponsorsSection,
		HowItWorksSection,
		InformationSection,
		CountersSection,
		TestimonialsSection,
		PricingSection,
		TopServicesSection
	}
}
</script>
