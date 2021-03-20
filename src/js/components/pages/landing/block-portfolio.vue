<template>
    <div>
        <div class="card card-slider card-style">
            <div class="content mb-0">
                <h4 class="mb-4">Мои работы</h4>
                <div class="double-slider owl-carousel owl-no-dots">
                    <div class="item">
                        <div data-card-height="300" class="card bg-18 rounded-m shadow-l">
                            <div class="card-overlay bg-gradient"></div>
                        </div>
                    </div>
                    <div class="item">
                        <div data-card-height="300" class="card bg-28 rounded-m shadow-l">
                            <div class="card-overlay bg-gradient"></div>
                        </div>
                    </div>
                    <div class="item">
                        <div data-card-height="300" class="card bg-13 rounded-m shadow-l">
                            <div class="card-overlay bg-gradient"></div>
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
    }
</script>

<style scoped>

</style>
