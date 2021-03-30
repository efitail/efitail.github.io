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
                        <div class="pt-1 pb-2 pl-5 pr-3">

                            <b>Сложное окрашивание волос или осветление корней + тонирование:</b><br>

                            <i class="fas fa-caret-right"></i> Короткие (до плеч) 5000 – 6000р<br>
                            <i class="fas fa-caret-right"></i> Средние волосы 7000 – 9000р<br>
                            <i class="fas fa-caret-right"></i> Длинные волосы 9000 – 12000р<br><br>

                            <b>Тонирование волос:</b><br>

                            <i class="fas fa-caret-right"></i> Короткие (до плеч) 3000-4000р<br>
                            <i class="fas fa-caret-right"></i> Средние волосы 4000 – 5000р<br>
                            <i class="fas fa-caret-right"></i> Длинные волосы 5000 – 8000р<br><br>

                            <b>Окрашивание корней: </b> 3000р<br><br>

                            <b>Окрашивание корней + тонирование / однотонное окрашивание:</b><br>

                            <i class="fas fa-caret-right"></i> Короткие (до плеч) 4000 – 5000р<br>
                            <i class="fas fa-caret-right"></i> Средние волосы 5000 – 6000р<br>
                            <i class="fas fa-caret-right"></i> Длинные волосы 6000 – 7000р<br><br>

                            <b>Тотальный блонд и смывка волос - цена после консультации</b>

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
                        <div class="pt-1 pb-2 pl-5 pr-3">

                            <i class="fas fa-caret-right"></i> Стрижка женская 1600 – 2000р<br>
                            <i class="fas fa-caret-right"></i> Стрижка мужская 1500р<br>
                            <i class="fas fa-caret-right"></i> Стрижка концов в момент окрашивания или другой услуги - 1000р

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
                        <div class="pt-1 pb-2 pl-5 pr-3">

                            <b>Абсолютное счатье от Lebel:</b><br>
                            <i class="fas fa-caret-right"></i> Короткие (до плеч) 2500р<br>
                            <i class="fas fa-caret-right"></i> Средние волосы 3000р<br>
                            <i class="fas fa-caret-right"></i> Длинные волосы 3500р<br><br>

                            <b>Масляное обертывание от La Biosthetique:</b><br>
                            <i class="fas fa-caret-right"></i> Короткие (до плеч) 3500р<br>
                            <i class="fas fa-caret-right"></i> Средние волосы 4000р<br>
                            <i class="fas fa-caret-right"></i> Длинные волосы 4000р

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
