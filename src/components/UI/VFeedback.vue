<template>
    <button
        class="feedback"
        type="button"
        @click="onShowDialog"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        onShowDialog() {
            this.$emit("onShowDialog")
        },
    },
}
</script>

<style lang="scss">
.feedback {
    background: inherit;
    border: none;
}
</style>
