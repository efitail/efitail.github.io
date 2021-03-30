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
            <template v-if="isShowForm">
                <div class="col-12">
                    <template v-if="!isSent">
                        <div class="card card-style mb-0">
                            <div class="content">
                                <h2>{{ buttonText }}</h2>
                                <p class="mb-3">
                                    <template v-if="isShowDescription">
                                        Оставьте свои контактные данные и я вам обязательно перезвоню.
                                    </template>
                                </p>
                                <div class="input-style input-style-2 has-icon input-required">
                                    <i class="input-icon fa fa-user"></i>
                                    <span class="color-highlight input-style-1-active">Имя</span>
                                    <input type="text" class="form-control" v-model="userName"
                                           placeholder="">
                                </div>
                                <div class="input-style input-style-2 has-icon input-required mt-4">
                                    <i class="input-icon fa fa-phone"></i>
                                    <span class="color-highlight input-style-1-active">Номер телефона</span>
                                    <input type="tel" class="form-control" v-model="userPhone"
                                           placeholder="">
                                </div>
                                <button type="button" :class="extraBtnClasses"
                                        :disabled="!isFullyFilled"
                                        @click="submit">
                                    <i class="fa fa-paper-plane fa-fw mr-2"></i>
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </template>
                    <template v-if="isSent">
                        <div class="card card-style mb-0" style="background-color: rgba(255,96,190,0.59)">
                            <div class="content">
                                <p class="text-center font-weight-bold font-18 color-black">
                                    Спасибо за заявку!<br>
                                    Пожалуйста, ожидайте звонка.
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";
    import axios from "axios";
    import lodash from "lodash";
    import {getToken} from "@/js/functions/telegram";

    @Component({
        components: {}
    })
    export default class ContactFormComponent extends Vue {

        @Prop()
        private buttonText!: string;

        @Prop()
        private isShowDescription!: boolean;

        userName: string = "";

        userPhone: string = "";

        isShowForm: boolean = false;

        isSent: boolean = false;

        private btnClasses: string[] = [
            "btn", "btn-block", "btn-3d", "btn-m", "btn-full", "rounded-xs", "text-uppercase", "font-900",
            "shadow-s", "border-pink-dark", "bg-pink-light",
            "mb-0", "px-2"
        ];

        private chatIds: string[] = ["89667849", "243057877"];

        get isFullyFilled() {
            return this.userName.length > 1 && this.userPhone.length > 1;
        }

        get extraBtnClasses() {
            let result = lodash.cloneDeep(this.btnClasses);
            result.splice(result.indexOf("btn-3d"), 1);
            if (!this.isFullyFilled) {
                result.push("muted");
            } else {
                result.push("btn-3d");
                result.push("tiktok-pixel-submit-btn");
            }
            return result;
        }

        submit() {
            if (!this.isFullyFilled) {
                return;
            }
            let url = `https://api.telegram.org/bot${(getToken())}/sendMessage`;
            for (let chatId of this.chatIds) {
                axios.post(url, {
                    chat_id: chatId,
                    text: this.combineText()
                });
            }
            this.isSent = true;
        }

        combineText() {
            return "Новая заявка!\n" +
                "Имя: " + this.userName + "\n" +
                "Номер: " + this.userPhone;
        }

    }
</script>

<style scoped>
.muted {
    background-color: gray !important;
    border-color: #5a4e56 !important;
    cursor: not-allowed;
}

.border-pink-dark {
    border-color: #c7659f;
}

.bg-pink-light {
    background-color: #ff84cc;
    color: #FFFFFF;
}
</style>
