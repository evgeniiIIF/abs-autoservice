<template>
    <div class="question">
        <div class="question__title-group">
            <h6 class="question__title--end">{{ opts.titleTop }}</h6>
            <h6 class="question__title--end">{{ opts.titleBottom }}</h6>
        </div>
        <p class="question__text">{{ opts.text }}</p>
    </div>
</template>

<script>
import VInput from "../UI/VInput.vue"

export default {
    name: "qu4",
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
    &__title-group {
        margin-bottom: 16px;
    }
    &__title--end {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 138%;
        color: #ffffff;
        @include af(32, 20);
    }

    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 133%;
        color: #00a19c;
    }
}
</style>
