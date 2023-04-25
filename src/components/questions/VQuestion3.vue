<template>
    <div class="question">
        <h6 class="question__title">{{ opts.title }}</h6>
        <div class="question__inputs">
            <div class="question__input-name">
                <VInput :opts="opts.inputOpts.inputName" />
            </div>
            <div class="question__input-phone">
                <VInput :opts="opts.inputOpts.inputTel" />
            </div>
        </div>
        <p class="question__privacy-policy">Нажимая кнопку “Завершить” вы соглашаетесь с нашей Политикой конфиденциальности</p>
    </div>
</template>

<script>
import VInput from "../UI/VInput.vue"

export default {
    name: "qu3",
    components: { VInput },
    props: {
        opts: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

.question {
    &__inputs {
        display: flex;
        max-width: 512px;
        margin-bottom: 8px;
        @include md-block() {
            flex-direction: column;
        }
    }
    &__input-name {
        margin-right: 20px;
        @include md-block() {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }

    &__input-phone {
    }
    &__privacy-policy {
        margin-bottom: 28px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: #999999;
    }
}
</style>
