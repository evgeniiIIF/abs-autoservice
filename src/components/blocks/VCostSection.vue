<template>
    <section class="cost">
        <div class="container">
            <div class="cost__body">
                <div class="cost__texts">
                    <h3 class="cost__title">Быстрый и простой расчет стоимости ремонта и обслуживания автомобиля</h3>
                    <p class="cost__text">Ответьте на несколько вопросов и получите точную стоимость у нашего специалиста</p>
                </div>
                <div class="cost__quest">
                    <div class="quest-cost">
                        <div class="quest-cost__content">
                            <VQuest />
                        </div>
                        <div class="quest-cost__image">
                            <picture>
                                <source
                                    media="(min-width: 424px)"
                                    srcset="@/assets/img/main/cost/cost_image.png"
                                />
                                <source
                                    media="(max-width: 425px)"
                                    srcset="@/assets/img/main/cost/cost_image_small.png"
                                />
                                <img
                                    src="@/assets/img/main/cost/cost_image.png"
                                    alt="image"
                                />
                            </picture>
                        </div>
                        <div class="quest-cost__blur"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VQuest from "../UI-FC/VQuest.vue"
import VButton from "../UI/VButton.vue"
import VProgressBarX from "../UI/VProgressBarX.vue"
import VCardProfitably from "../cards/VCardProfitably.vue"

export default {
    components: { VButton, VCardProfitably, VProgressBarX, VQuest },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;

.cost {
    &__body {
        padding: 60px 0px 60px 0px;
        @include lg-block() {
            padding: 40px 0;
        }
    }

    &__texts {
        max-width: 668px;
        margin-bottom: 40px;
    }

    &__title {
        margin-bottom: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 138%;
        color: #ffffff;
        @include af(32, 20);
    }

    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #898989;
        @include af(16, 14);
    }

    &__quest {
    }
}

.quest-cost {
    position: relative;
    display: flex;
    border-radius: 16px;
    overflow: hidden;
    background: #2a2a2a;
    @include lg-block() {
        overflow: visible;
        flex-direction: column;
    }

    &__content {
        flex: 0 0 50.833333333%;
        @include lg-block() {
            position: relative;
            z-index: 1;
        }
    }

    &__image {
        position: relative;
        flex: 1 1 auto;
        @include lg-block() {
            margin-top: -160px;
            flex: 1 1 358px;
        }

        @include md-block() {
            margin-top: 0;
            flex: 1 1 auto;
            padding-top: 54.596838%;
        }

        img {
            position: absolute;
            right: 0;
            top: 50%;
            max-width: 100%;
            z-index: 1;
            transform: translateY(-50%);
            @include md-block() {
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transform: translateY(0);
            }
        }
    }
    &__blur {
        position: absolute;
        width: 227px;
        height: 227px;
        right: 0;
        top: -65px;
        background: #00a19c;
        filter: blur(150px);

        @include lg-block() {
            position: absolute;
            width: 255px;
            height: 255px;
            right: -170px;
            top: -200px;
            background: #00a19c;
            opacity: 0.34;
            filter: blur(70px);
        }
        @include sm-block() {
            top: -250px;
        }
    }
}
</style>
