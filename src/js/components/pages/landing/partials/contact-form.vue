<template>
    <div>
        <div class="row">
            <template v-if="!isShowForm">
                <div class="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"
                     style="padding-left: 30px; padding-right: 30px;">
                    <button type="button" :class="btnClasses" @click="isShowForm = true">
                        <i class="fa fa-hand-point-right fa-fw mr-2"></i>
                        {{ buttonText }}
                        <i class="fa fa-hand-point-left fa-fw ml-2"></i>
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="col-12">
                    <div class="card card-style mb-0">
                        <div class="content">
                            <h2>{{ buttonText }}</h2>
                            <p class="mb-3">
                                Оставьте свои контактные данные и мы Вам перезвоним.
                            </p>
                            <div class="input-style input-style-2 has-icon input-required">
                                <i class="input-icon fa fa-user"></i>
                                <span class="color-highlight input-style-1-active">Имя</span>
                                <input type="name" class="form-control" value="" placeholder="Наталья">
                            </div>
                            <div class="input-style input-style-2 has-icon input-required mt-4">
                                <i class="input-icon fa fa-phone"></i>
                                <span class="color-highlight input-style-1-active">Номер телефона</span>
                                <input type="phone" class="form-control" value=""
                                       placeholder="+7 987 654 32 10">
                            </div>
                            <a href="page-account.html#"
                               class="btn btn-full bg-green1-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900">
                                Отправить
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class ContactFormComponent extends Vue {

        @Prop()
        private botToken: string = "313003051:AAEBvSGdipzrwSFQZ_Zf7lF9nUGOmeJUNhQ";

        @Prop()
        private buttonText!: string;

        @Prop()
        private isShowForm: boolean = false;

        @Prop()
        private btnClasses: string[] = [
            "btn", "btn-block btn-3d", "btn-m", "btn-full", "rounded-xs", "text-uppercase", "font-900",
            "shadow-s", "border-red2-dark", "bg-red2-light",
            "mb-0", "px-2"
        ];

    }
</script>

<style scoped>

</style>
