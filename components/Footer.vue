<template>
    <footer id="footer">
        <div class="footer-cont">
            <section id="footer-top">
                <v-responsive
                    class="no-flex mx-auto py-5 px-10 footer-top-wrapper"
                    :max-width="containerSize"
                    height="135px"
                >
                    <v-row>
                        <v-col md="7" class="white--text">
                            <p class="white--text">Fames lectus id nibh venenatis egestas in arcu arcu ac</p>
                            <h4>Try Bickert Management Inc. Marketplace</h4>
                        </v-col>
                        <v-col 
                            md="5"
                            class="text-right"
                            align-self="center"
                        >
                            <v-btn
                                color="white"
                                style="color: #BE1E2D"
                                depressed
                                large
                            >
                                How it Works
                            </v-btn>
                            <v-btn 
                                class="ml-2"
                                outlined
                                color="white"
                                large
                            >Contact Us</v-btn>
                        </v-col>
                    </v-row>
                </v-responsive>
            </section>
            <section 
                id="footer-middle"
                class="pt-5"
            >
                <v-responsive
                    class="no-flex mx-auto py-5 px-3 footer-middle-wrapper"
                    :max-width="containerSize"
                >
                    <v-row>
                        <v-col md="5">
                            <v-img :src="require('~/static/logo.png')" max-width="345px"></v-img>
                            <p class="mt-5 mb-7">
                                Nec sit facilisi sagittis, ipsum enim. Morbi consequat<br>
                                amet, vulputate ac sit pulvinar iaculis bibendum mattis.<br>
                                Duis amet, eget quis tristique.
                            </p>
                            <a 
                                v-for="(item, index) in socialMedia"
                                :key="index"
                                :href="item.link"
                                class="d-inline-block mr-2"
                            >
                                <v-img :src="item.icon" width="42px"></v-img>
                            </a>
                        </v-col>
                        <v-col md="3">
                            <h5 class="mb-5">Navigate</h5>
                            <ul class="pl-0">
                                <li
                                    class="mb-3"
                                    v-for="(item, index) in navigateLinks" 
                                    :key="index"
                                >
                                    <a class="text-decoration-none" :href="item.link" v-text="item.title"></a>
                                </li>
                            </ul>
                        </v-col>
                        <v-col md="3">
                            <h5 class="mb-5">Browse</h5>
                            <ul class="pl-0">
                                <li
                                    class="mb-3"
                                    v-for="(item, index) in navigateLinks" 
                                    :key="index"
                                >
                                    <a class="text-decoration-none" :href="item.link" v-text="item.title"></a>
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-responsive>
            </section>
            <section id="footer-bottom">
                <v-responsive
                    class="no-flex mx-auto py-5 px-3 footer-bottom-wrapper"
                    :max-width="containerSize"
                >
                    <v-divider class="mb-5"></v-divider>
                    <p class="text-center">&copy; Copyright {{ (new Date()).getFullYear() }} - Bickert Management Inc. Marketplace. All right reserved.</p>
                </v-responsive>
            </section>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'footer-layout',
	data: () => ({
		topMenu: [
			{ name: 'how-it-works', label: 'How it works' },
			{ name: 'solutions', label: 'Solutions' },
			{ name: 'login', label: 'Login', link: 'login' },
        ],
        socialMedia: [
            { icon: require('~/assets/images/facebook.png'), link: '#' },
            { icon: require('~/assets/images/twitter.png'), link: '#' },
            { icon: require('~/assets/images/linkedin.png'), link: '#' },
            { icon: require('~/assets/images/instagram.png'), link: '#' },
        ],
        navigateLinks: [
            { title: "Neque quam euismod ultrices", link: "#" },
            { title: "Orci ipsum iaculis", link: "#" },
            { title: "Suspendisse volutpat eget nibh", link: "#" },
            { title: "At sem quisque in posuere dignissim", link: "#" },
        ]
	}),
}
</script>
<style scoped>
    .footer-cont { position: relative; }
    .footer-cont:before { content: ''; position: absolute; width: 100%; height: 60px; display: block; background: #f5f5f5; }
    .store .footer-cont:before { background: transparent; border-bottom: 1px solid #E1E1E1; }
    p { margin-bottom: 0; font-size: 14px; }
    .footer-top-wrapper { background: linear-gradient(225deg, #E25405 0%, #CA0316 100%), #FFFFFF; border-radius: 5px; }
    ul { list-style: none; }
    ul li a { font-size: 14px; color: #555555; }
</style>