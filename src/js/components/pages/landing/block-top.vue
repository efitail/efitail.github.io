<template>
    <div>
        <div class="card card-style block-top" style="background-color: rgb(255 242 250)">
            <div class="content mb-0">
                <div class="row justify-content-center" style="margin-bottom: 15px;">
                    <div class="col-12">
                        <p class="mt-n1 pb-0 line-height-m">
                            <i class="fa fa-heart text-color-main pr-2"></i> Hair Stylist СПБ<br>
                            <i class="fa fa-heart text-color-main pr-2"></i> Технолог Lebel<br>
                            <i class="fa fa-heart text-color-main pr-2"></i> Все виды окрашиваний<br>
                            <i class="fa fa-heart text-color-main pr-2"></i> Премиум по доступной цене
                        </p>
                    </div>
                    <img src="resources/images/logo.png" class="rounded-s mx-auto mt-1 img-logo">
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
    export default class BlockTopComponent extends Vue {
    }
</script>

<style scoped>
.block-top {
    position: relative;
}

.img-logo {
    position: absolute;
    right: 10px;
    top: 10px;
    height: calc(100% - 20px);
}
</style>
