<template>
    <div class="card-profitably">
        <div class="card-profitably__image">
            <img
                :src="opts.img"
                :alt="opts.title"
            />
        </div>
        <div class="card-profitably__texts">
            <h4 class="card-profitably__title">{{ opts.title }}</h4>
            <p class="card-profitably__text">{{ opts.text }}</p>
        </div>
        <div class="card-profitably__button">
            <VButton>{{ opts.textButton }}</VButton>
        </div>
    </div>
</template>

<script>
import VButton from "../UI/VButton.vue"

export default {
    props: {
        opts: {
            type: Object,
            reqired: true,
        },
    },
    components: { VButton },
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;

.card-profitably {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px;
    background: linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%);
    border-radius: 16px;
    border: 1px solid $bd;

    &__image {
        margin-bottom: 14px;
        img {
            width: 100%;
        }
    }

    &__texts {
        flex: 1 1 auto;
        min-height: 80px;
        margin-bottom: 16px;
        @include md-block() {
            min-height: auto;
        }
    }

    &__title {
        margin-bottom: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 133%;
        color: #ffffff;
        @include md-block() {
            font-size: 14px;
            margin-bottom: 0;
        }
    }
    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        color: #898989;
        @include md-block() {
            display: none;
        }
    }

    &__button {
        .button {
            background: transparent;
        }
    }
}
</style>
