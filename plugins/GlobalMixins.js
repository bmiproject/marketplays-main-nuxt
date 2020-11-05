import Vue from 'vue'

const GlobalMixins = {
    data: () => ({
        containerSize: '1280px',
        storeUrl: '/store'
    })
}

Vue.mixin(GlobalMixins)