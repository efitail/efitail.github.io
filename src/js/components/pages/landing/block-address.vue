<template>
    <div>
        <div class="card card-style">
            <div class="content">
                <h4 class="pt-2">Студия красоты Цвет & Форма</h4>
                <p>
                    <i class="fa fa-map-marker color-red2-dark mr-1"></i>
                    СПб, ул. Большая Посадская, д. 18
                    <b></b>
                </p>
            </div>
            <div class="responsive-iframe add-iframe">
                <iframe class="location-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1997.3318281280522!2d30.327115!3d59.95981900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f46ea7dda862d64!2z0KHRgtGD0LTQuNGPINC60YDQsNGB0L7RgtGLINCm0LLQtdGCICYg0KTQvtGA0LzQsA!5e0!3m2!1sru!2sus!4v1616438886022!5m2!1sru!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
