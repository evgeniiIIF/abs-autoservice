<template>
    <div class="question">
        <h6 class="question__title">{{ opts.title }}</h6>
        <div class="question__input">
            <VInput :opts="opts.inputOpts" />
        </div>
    </div>
</template>

<script>
import VInput from "../UI/VInput.vue"

export default {
    components: { VInput },
    props: {
        opts: {
            type: Object,
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

.question {
    &__title {
        margin-bottom: 24px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 133%;
        color: #ffffff;
        @include af(24, 18);
        @include md-block() {
            margin-bottom: 16px;
        }
    }

    &__input {
        max-width: 300px;
        margin-bottom: 64px;
    }
}
</style>
