<template>
    <div>
        <div class="card card-style">
            <div class="content mb-2">
                <h4>Предоставляемые услуги</h4>
            </div>
            <div class="accordion" id="accordion-1">
                <div class="mb-0">
                    <button class="btn accordion-btn collapsed" data-toggle="collapse" data-target="#collapse1"
                            aria-expanded="false">
                        <i class="fa fa-heart text-color-main mr-2"></i>
                        Окрашивания <small class="text-secondary">(от 5000р)</small>
                        <i class="fa fa-chevron-down font-10 accordion-icon"></i>
                    </button>
                    <div id="collapse1" class="collapse" data-parent="#accordion-1" style="">
                        <div class="pt-1 pb-2 pl-3 pr-3">
                            Больше про окрашивания
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <button class="btn accordion-btn collapsed" data-toggle="collapse" data-target="#collapse2"
                            aria-expanded="false">
                        <i class="fa fa-heart text-color-main mr-2"></i>
                        Стрижки <small class="text-secondary">(от 1000р)</small>
                        <i class="fa fa-chevron-down font-10 accordion-icon"></i>
                    </button>
                    <div id="collapse2" class="collapse" data-parent="#accordion-1" style="">
                        <div class="pt-1 pb-2 pl-3 pr-3">
                            Больше про стрижки
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <button class="btn accordion-btn collapsed" data-toggle="collapse" data-target="#collapse3"
                            aria-expanded="false">
                        <i class="fa fa-heart text-color-main mr-2"></i>
                        Уходы <small class="text-secondary">(от 2000р)</small>
                        <i class="fa fa-chevron-down font-10 accordion-icon"></i>
                    </button>
                    <div id="collapse3" class="collapse" data-parent="#accordion-1" style="">
                        <div class="pt-1 pb-2 pl-3 pr-3">
                            Больше про уходы
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
    export default class BlockServicesComponent extends Vue {
    }
</script>

<style scoped>

</style>
