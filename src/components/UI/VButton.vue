<template>
    <component
        :class="classes"
        :is="tag"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: "button",
        },
    },

    computed: {
        classes() {
            return ["button"]
        },
    },
}
</script>

<style lang="scss">
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 28px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
    background: #00a19c;
    border: 2px solid #00a19c;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .button-with-icon__text {
        margin-right: 16px;
    }
}
</style>
