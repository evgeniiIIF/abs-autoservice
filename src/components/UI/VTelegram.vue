<template>
    <a
        class="telegram"
        target="_blank"
        :href="`https://t.me/${telegramUserName}`"
    >
        <img
            src="@/assets/img/header/social/Telegram.svg"
            alt="tg"
        />
    </a>
</template>

<script>
export default {
    props: {
        telegramUserName: {
            type: String,
            // required: true,
        },
    },
}
</script>

<style lang="scss">
.telegram {
}
</style>
