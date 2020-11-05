<template>
	<div id="home">
		<hero-section />
		<marketplays-applications-section />
		<sponsors-section />
		<services-section />
		<whats-great-section />
		<cta-section />
		<faq-section />
	</div>
</template>

<script>
import HeroSection from '~/components/sections/main/Hero'
import MarketplaysApplicationsSection from '~/components/sections/main/MarketplaysApplications'
import SponsorsSection from '~/components/sections/main/Sponsors'
import ServicesSection from '~/components/sections/main/Services'
import WhatsGreatSection from '~/components/sections/main/WhatsGreat'
import FaqSection from '~/components/sections/main/Faq'
import CtaSection from '~/components/sections/main/Cta'

export default {
	name: 'Home',
	components: {
		HeroSection,
		MarketplaysApplicationsSection,
		SponsorsSection,
		ServicesSection,
		WhatsGreatSection,
		FaqSection,
		CtaSection,
	}
}
</script>
