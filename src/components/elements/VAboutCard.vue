<template>
    <div class="card">
        <div class="card__image">
            <img
                :src="cardData.img"
                alt="image"
            />
        </div>
        <div class="card__content">
            <h6 class="card__title">{{ cardData.title }}</h6>
            <p class="card__text">{{ cardData.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Object,
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

.card {
    display: flex;
    width: 516px;
    padding: 16px 32px 40px 16px;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(34, 35, 36, 0.1);
    border-radius: 20px;

    @include to(992px) {
        flex-direction: column;
        width: 270px;
        padding: 16px 13px 24px;
    }

    &__image {
        margin-right: 24px;
    }

    &__content {
        padding-top: 8px;
    }

    &__title {
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        color: #18191b;

        @include to(992px) {
            font-size: 14px;
        }
    }

    &__text {
        max-width: 372px;
        max-height: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        color: #63636f;
    }
}
</style>
