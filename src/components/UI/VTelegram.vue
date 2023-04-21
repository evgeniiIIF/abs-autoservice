<template>
    <a
        class="telegram"
        target="_blank"
        :href="`https://t.me/${telegramUserName}`"
    >
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        telegramUserName: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.telegram {
}
</style>
