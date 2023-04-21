<template>
    <div class="progress">
        <div
            class="progress__line"
            :style="{ width: percent }"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        percent: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;
.progress {
    height: 2px;

    &__line {
        height: 100%;
        background: #00a19c;
    }
}

/* Hide scrollbar for Chrome, Safari and Opera */
</style>
