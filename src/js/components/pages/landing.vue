<template>
    <div>
        <div class="page-content header-clear-small">
            <c-block-top/>
            <c-block-consultation/>
            <c-contact-form button-text="Получить бесплатную консультацию" :is-show-description="true"/>
            <c-block-services/>
            <c-contact-form button-text="Записаться на услугу" :is-show-description="true"/>
            <c-block-portfolio/>
            <c-block-contacts/>
            <c-contact-form button-text="Оставьте заявку и я вам перезвоню" :is-show-description="false"/>
            <c-block-address/>
            <c-block-terms/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import ContactFormComponent from "@vue/pages/landing/partials/contact-form.vue";
    import BlockTopComponent from "@vue/pages/landing/block-top.vue";
    import BlockConsultationComponent from "@vue/pages/landing/block-consultation.vue";
    import BlockServicesComponent from "@vue/pages/landing/block-services.vue";
    import BlockPortfolioComponent from "@vue/pages/landing/block-portfolio.vue";
    import BlockContactsComponent from "@vue/pages/landing/block-contacts.vue";
    import BlockAddressComponent from "@vue/pages/landing/block-address.vue";
    import BlockTermsComponent from "@vue/pages/landing/block-terms.vue";

    @Component({
        components: {
            cContactForm: ContactFormComponent,
            cBlockTop: BlockTopComponent,
            cBlockConsultation: BlockConsultationComponent,
            cBlockServices: BlockServicesComponent,
            cBlockPortfolio: BlockPortfolioComponent,
            cBlockContacts: BlockContactsComponent,
            cBlockAddress: BlockAddressComponent,
            cBlockTerms: BlockTermsComponent,
        }
    })
    export default class LandingPageComponent extends Vue {
    }
</script>

<style scoped>

</style>
