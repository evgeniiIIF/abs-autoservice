<template>
    <div class="question">
        <h6 class="question__title">{{ opts.title }}</h6>
        <div class="question__textarea">
            <VInput :opts="opts.inputOpts" />
        </div>
    </div>
</template>

<script>
import VInput from "../UI/VInput.vue"

export default {
    name: "qu2",
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
    &__textarea {
        max-width: 512px;
        margin-bottom: 28px;
        textarea {
            resize: none;
            height: 80px;
            overflow-y: auto;
        }
        textarea {
            scrollbar-width: none; /* for Firefox */
            -ms-overflow-style: none; /* for Internet Explorer and Edge */
            overflow: -moz-scrollbars-none; /* for older versions of Firefox */
            overflow: hidden; /* for Chrome and Safari */
        }

        textarea::-webkit-scrollbar {
            display: none; /* for Chrome and Safari */
        }
    }
}
</style>
