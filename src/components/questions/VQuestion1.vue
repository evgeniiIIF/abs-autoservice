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
}
</style>
