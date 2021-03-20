<template>
    <div>
        Portfolio
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {landingRes} from "@/js/store/resources";

    @Component({
        components: {}
    })
    export default class BlockPortfolioComponent extends Vue {
        get landing() {
            return this.$store.state[landingRes.key];
        }
    }
</script>

<style scoped>

</style>
