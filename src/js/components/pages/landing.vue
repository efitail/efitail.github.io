<template>
    <div>
        <c-preloader v-if="!loaded"/>
        <div v-if="loaded">
            <div class="page-content header-clear-small">
                <c-block-top/>
                <c-block-services/>
                <c-block-portfolio/>
                <c-block-about-us/>
                <c-block-contacts/>
                <c-block-address/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import PreloaderComponent from "@vue/partials/preloader.vue";
    import BlockTopComponent from "@vue/pages/landing/block-top.vue";
    import BlockServicesComponent from "@vue/pages/landing/block-services.vue";
    import BlockPortfolioComponent from "@vue/pages/landing/block-portfolio.vue";
    import BlockAboutUsComponent from "@vue/pages/landing/block-about-us.vue";
    import BlockContactsComponent from "@vue/pages/landing/block-contacts.vue";
    import BlockAddressComponent from "@vue/pages/landing/block-address.vue";
    import {landingRes} from "@/js/store/resources";

    @Component({
        components: {
            cPreloader: PreloaderComponent,
            cBlockTop: BlockTopComponent,
            cBlockServices: BlockServicesComponent,
            cBlockPortfolio: BlockPortfolioComponent,
            cBlockAboutUs: BlockAboutUsComponent,
            cBlockContacts: BlockContactsComponent,
            cBlockAddress: BlockAddressComponent,
        }
    })
    export default class LandingPageComponent extends Vue {

        mounted() {
            this.$store.commit("ensureResourceIsLoaded", landingRes)
        }

        get landing() {
            return this.$store.state[landingRes.key];
        }

        get loaded() {
            return this.landing;
        }
    }
</script>

<style scoped>

</style>
