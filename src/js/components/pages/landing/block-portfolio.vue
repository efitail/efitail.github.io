<template>
    <div>
        <div class="card card-slider card-style">
            <div class="content mb-0">
                <h4 class="mb-4">Мои работы</h4>
                <div class="single-slider slider-boxed owl-carousel owl-has-controls pb-4">
                    <div class="item" v-for="image in images()">
                        <div data-card-height="500" class="card rounded-m shadow-l"
                             :style="{ 'background-image': 'url(resources/images/portfolio/' + image + ')' }">
                            <div class="card-overlay"></div>
                        </div>
                    </div>
                </div>
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
    export default class BlockPortfolioComponent extends Vue {

        images() {
            return [
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg",
                "5.jpg",
                "6.jpg",
                "7.jpg",
                "8.jpg",
                "9.jpg"
            ];
        }

    }
</script>

<style scoped>

</style>
