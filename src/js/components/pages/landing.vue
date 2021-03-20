<template>
    <div>
        <div class="page-content header-clear-small">
            <c-block-top/>
            <c-block-services/>
            <c-block-portfolio/>
            <c-block-contacts/>
            <c-block-address/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import BlockTopComponent from "@vue/pages/landing/block-top.vue";
    import BlockServicesComponent from "@vue/pages/landing/block-services.vue";
    import BlockPortfolioComponent from "@vue/pages/landing/block-portfolio.vue";
    import BlockContactsComponent from "@vue/pages/landing/block-contacts.vue";
    import BlockAddressComponent from "@vue/pages/landing/block-address.vue";

    @Component({
        components: {
            cBlockTop: BlockTopComponent,
            cBlockServices: BlockServicesComponent,
            cBlockPortfolio: BlockPortfolioComponent,
            cBlockContacts: BlockContactsComponent,
            cBlockAddress: BlockAddressComponent,
        }
    })
    export default class LandingPageComponent extends Vue {
    }
</script>

<style scoped>

</style>
