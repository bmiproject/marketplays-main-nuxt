<template>
    <section id="information-section">
        <v-responsive
            class="no-flex mx-auto"
            :max-width="containerSize"
        >
            <v-row class="row1 px-md-2">
                <v-col md="6" class="pt-15">
                    <v-img
                        src="../../../assets/ecommerce/info1.png"
                        max-width="580px"
                    ></v-img>
                </v-col>
                <v-col md="6" class="text-center" align-self="center">
                    <h3 
                        class="mx-auto mb-5"
                        style="max-width: 625px"
                    >
                        Risus, sapien placerat enim non eget monteshac amet
                    </h3>
                    <p class="mb-10">
                        Malesuada nisi nunc, elementum elit arcu sed et et eu. Bibendum neque ac tristique <br> tempor, ornare ut. In augue ut in eu gravida facilisis. Arcu auctor sed fusce non vitae elit, <br>volutpat commodo, sapien.
                    </p>
                    <v-responsive 
                        class="mx-auto" 
                        max-width="625px"
                    >   
                        <v-row dense>
                            <v-col
                                v-for="(item, index) in categories"
                                :key="index"
                                md="4"
                                class="pr-5"
                            >
                                <v-hover v-slot:default="{ hover }">
                                    <v-btn 
                                        text
                                        color="primary"    
                                        v-html="item.label"
                                        :class="{'mt-3': true, 'hovered': hover }"
                                        width="100%"
                                        large
                                        outlined
                                        tile
                                    ></v-btn>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-responsive>
                </v-col>
            </v-row>
            <v-row class="px-md-2 my-15">
                <v-col md="6">
                    <h3 class="mb-3">Hire for any scope</h3>
                    <p>Sed tristique augue aliquet ultrices. Sociis habitant faucibus purus etiam. Vel viverra diam tortor ullamcorper fringilla lacus scelerisque facilisi.</p>
                    <div 
                        v-for="(item, index) in hireScopes"
                        :key="index"
                    >
                        <div class="divider"></div>
                        <h3 
                            class="mt-2 mb-3"
                            v-text="item.title"
                        ></h3>
                        <p v-html="item.content"></p>
                    </div>
                    <v-btn
                        depressed
                        color="primary"
                        class="mt-5 mb-15"
                    >
                        Learn More
                    </v-btn>
                </v-col>
                <v-col md="6">
                    <v-img
                        src="../../../assets/ecommerce/info2.png"
                        max-width="610px"
                        contain
                    ></v-img>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'information-section',
    data: () => ({
        categories: [
            { label: "Sales & Marketing" },
            { label: "Accounting" },
            { label: "Writing" },
            { label: "Admin & Support" },
            { label: "Human Resource" },
            { label: "Design" },
            { label: "Development" },
            { label: "Secretarial" },
            { label: "Finance" },
        ],
        hireScopes: [
            { title: "Complex project",  content: "Id enim ullamcorper tristique sagittis scelerisque interdum justo, egestas dignissim." },
            { title: "Longer-term contract",  content: "Varius quam nibh amet, non, integer lectus eget integer donec. Nibh etiam etiam senectus vitae." },
            { title: "Short-term contract",  content: "In egestas velit nulla mauris sit convallis elit. Egestas eu in venenatis ullamcorper." },
        ]
    })
}
</script>
<style scoped>
    .v-btn { border: 0 none; border-bottom: 1px solid #CCCCCC; transition: 0.5s ease all;}
    .v-btn.hovered { border-color: #BE1E2D !important; }
    .v-btn.hovered:before, .v-btn:focus:before { opacity: 0; }
    .divider { width: 40px; height: 5px; background: #BE1E2D; display: inline-block; }
</style>