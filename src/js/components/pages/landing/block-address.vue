<template>
    <div>
        <div class="card card-style">
            <div class="content">
                <h4 class="pt-2">Где находится салон</h4>
                <p>
                    <i class="fa fa-map-marker color-red2-dark"></i>
                    СПб, ул. Большая Посадская, д. 18
                    <b>Цвет & Форма</b>
                </p>
            </div>
            <div class="responsive-iframe add-iframe">
                <iframe class="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.3318412764525!2d30.32492641667012!3d59.959818781883875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963168721b71f1%3A0x7f46ea7dda862d64!2sBeauty%20Studio%20Color%20%26%20Shape!5e0!3m2!1sen!2sus!4v1616233744064!5m2!1sen!2sus" style="border:0;" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        components: {}
    })
    export default class BlockAddressComponent extends Vue {
    }
</script>

<style scoped>

</style>
