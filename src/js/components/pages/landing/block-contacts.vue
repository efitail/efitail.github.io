<template>
    <div>
        <div class="card card-style">
            <div class="content text-center mb-n2">
                <img src="resources/images/face.jpg" class="img-fluid rounded-circle mb-n3 d-block mx-auto"
                     style="width: 256px; height: 256px;">
                <p class="mb-n3 font-11 badge bg-color-main text-uppercase text-white">
                    Парикмахер-колорист
                </p>
                <h1 class="pt-2 mb-n1 font-26">Печковская-Цикорина Даша</h1>
                <p class="mt-3">
                    Приветствую Вас на моем сайте! Для получения детальной консультации свяжитесь со мной ❤️
                </p>
                <div class="text-center mb-4">
                    <a href="https://api.whatsapp.com/send?phone=+79657615761"
                       class="icon icon-xs bg-whatsup rounded-m shadow-xl tiktok-pixel-contact-link"
                       style="background-color: rgb(77 199 90);">
                        <i class="fab fa-whatsapp color-white"></i>
                    </a>
                    <a href="viber://chat/?number=+79657615761"
                       class="icon icon-xs rounded-m shadow-xl ml-2 tiktok-pixel-contact-link"
                       style="background-color: #7b519d;">
                        <i class="fab fa-viber color-white"></i>
                    </a>
                    <a href="tel:+79657615761"
                       class="icon icon-l mx-3 bg-phone rounded-m shadow-xl tiktok-pixel-contact-link">
                        <i class="fa fa-phone"></i>
                    </a>
                    <a href="https://t.me/efitail"
                       class="icon icon-xs rounded-m shadow-xl mr-2 tiktok-pixel-contact-link"
                       style="background-color: #34a4da;">
                        <i class="fab fa-telegram-plane color-white"></i>
                    </a>
                    <a href="http://instagram.com/_u/efitail"
                       class="icon icon-xs bg-instagram rounded-m shadow-xl tiktok-pixel-contact-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:efitailvlg@gmail.com"
                       class="pt-2 d-block color-theme opacity-30 tiktok-pixel-contact-link">
                        efitailvlg@gmail.com
                    </a>
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
    export default class BlockContactsComponent extends Vue {
    }
</script>

<style scoped>

</style>
