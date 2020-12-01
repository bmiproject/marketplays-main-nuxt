<template>
    <section>
        <v-responsive :max-width="containerSize" class="mx-auto no-flex my-5">
            <v-row>
                <v-col cols="12">
                    <article>
                        <h4>Shopping Cart</h4>
                    </article>
                </v-col>
                <v-col cols="3">
                    <aside></aside>
                    <v-radio-group v-model="form.subscriptionType">
                        <v-radio
                            v-for="n in 3"
                            :key="n"
                            :label="`Radio ${n}`"
                            :value="n"
                        ></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'cart',
    layout: 'checkout-process',
    data: () => ({
        form: {
            subscriptionType: null,
        },
    }),
}
</script>
