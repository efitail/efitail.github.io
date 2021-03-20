<template>
    <div>
        Services
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {landingRes} from "@/js/store/resources";

    @Component({
        components: {}
    })
    export default class BlockServicesComponent extends Vue {
        get landing() {
            return this.$store.state[landingRes.key];
        }
    }
</script>

<style scoped>

</style>
