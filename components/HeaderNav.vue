<template>
    <nav class="header-nav">
        <v-responsive 
            :max-width="containerSize"
            class="mx-auto no-flex"
        >
            <NuxtLink 
                :to="item.link || '#'" 
                v-for="(item, index) in navs" 
                :key="index"
            >
                <v-btn 
                    text
                    depressed 
                    x-large 
                    tile
                >
                    <v-icon v-if="item.icon && item.iconPosition == `left`" left>{{ item.icon }}</v-icon>
                    {{ item.label }}
                    <v-icon v-if="item.icon && item.iconPosition == `right`" right>{{ item.icon }}</v-icon>
                </v-btn>
            </NuxtLink>
        </v-responsive>
    </nav>
</template>
<script>
export default {
    name: 'header-nav',
    data: () => ({
        navs: [
            { label: 'Web Dev' },
            { label: 'Mobile Dev' },
            { label: 'Design' },
            { label: 'Writing' },
            { label: 'Admin Support' },
            { label: 'Customer Service' },
            { label: 'Marketing' },
            { label: 'Accounting' },
            { label: 'See All Categories', link: 'store/departments', icon: 'mdi-chevron-down', iconPosition: 'right' },
        ]  
    })
}
</script>