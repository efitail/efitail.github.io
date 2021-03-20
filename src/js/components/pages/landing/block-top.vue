<template>
    <div>
        <div class="card card-style preload-img" data-src="images/pictures/18w.jpg" data-card-height="150"
             style="height: 150px; background-image: url('images/pictures/18w.jpg');">
            <div class="card-center ml-3">
                <h1 class="color-white mb-0">Efitail</h1>
                <p class="color-white mt-n1 mb-0">
                    Технолог Lebel, Все виды окрашиваний, Премиум по доступной цене, Hair Stylist СПБ
                </p>
            </div>
            <div class="card-overlay bg-black opacity-80"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {landingRes} from "@/js/store/resources";

    @Component({
        components: {}
    })
    export default class BlockTopComponent extends Vue {
        get landing() {
            return this.$store.state[landingRes.key];
        }
    }
</script>

<style scoped>

</style>
