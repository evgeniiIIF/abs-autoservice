<template>
    <a
        class="whatsapp"
        target="_blank"
        :href="`https://wa.me/${whatsappNumber}`"
    >
        <img
            src="@/assets/img/header/social/Whatsapp.svg"
            alt="wh"
        />
    </a>
</template>

<script>
export default {
    props: {
        whatsappNumber: {
            type: String,
            // required: true,
        },
    },
}
</script>

<style lang="scss">
.whatsapp {
}
</style>
