<template>
    <header>
        <v-responsive 
            width="1300px" 
            height="100px"
            class="mx-auto no-flex"
        >
            <v-toolbar 
                flat
                class="py-5"
            >
                <v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <a href="/">
                        <v-img
                            alt="BMI Logo"
                            contain
                            :src="require('~/static/logo.png')"
                            width="345px"
                        />
                    </a>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-row class="my-auto" no-gutters>
                    <v-col 
                        class="text-right"
                        lg="7"
                    >
                        <v-btn 
                            class="topmenu-link text-capitalize"
                            :key="item.name"
                            :to="item.link"
                            text
                            v-for="item in topMenu"
                            v-html="item.label"
                        ></v-btn>
                    </v-col>
                </v-row>
            </v-toolbar>
        </v-responsive>
    </header>
</template>
<script>
export default {
    name: 'header-shop-layout',
	data: () => ({
		topMenu: [
			{ name: 'cart', label: 'Shopping Cart' },
			{ name: 'checkout', label: 'Checkout' },
			{ name: 'finish', label: 'Finish' },
		]
	}),
}
</script>
