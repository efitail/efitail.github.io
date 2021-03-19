<template>
    <div>
        <c-preloader v-if="!loaded"/>
        <div v-if="loaded">
            {{ landing.key }}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import PreloaderComponent from "../partials/preloader.vue";
    import {landingRes} from "../../store/resources";

    @Component({
        components: {
            cPreloader: PreloaderComponent
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
