<template>
    <section class="get-card">
        <div class="container">
            <div class="get-card__body">
                <div class="get-card__content">
                    <h3 class="get-card__title">Оплачивайте бонусами 30% от общей суммы чека или заказ-наряда</h3>
                    <p class="get-card__text--green">Выгода с ABS-AUTO Service - это просто!</p>
                    <p class="get-card__text">
                        При обслуживании от 3000 рублей Вы получаете персональную клубную карту совершенно бесплатно. Далее, покупая автозапчасти или проходя обслуживание в нашем
                        автотехцентре, мы возвращаем 10% от каждого чека на Вашу бонусную карту в виде баллов (1 балл = 1 рубль). Бонусные баллы начисляются через 14 дней после
                        покупки и сохраняются в течение 6 месяцев.
                    </p>
                    <div class="get-card__image get-card__image--mobile">
                        <img
                            src="@/assets/img/main/get-card/get-card.png"
                            alt="get-card"
                        />
                    </div>
                    <div class="get-card__button">
                        <VButton><span class="get-card__button-text">Получить карту</span> <span class="get-card__button-text--mobile">Получить карту бесплатно</span></VButton>
                    </div>
                </div>
                <div class="get-card__image">
                    <img
                        src="@/assets/img/main/get-card/get-card.png"
                        alt="get-card"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VButton from "../UI/VButton.vue"

export default {
    components: { VButton },
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;
.get-card {
    background: linear-gradient(180deg, #2a2a2a 0%, rgba(17, 18, 18, 0) 100%);
    @include md-block {
        background: #111212;
    }
    &__body {
        display: flex;
        padding: 60px 0 80px;
        @include md-block {
            padding: 40px 0 50px;
        }
    }

    &__content {
        flex: 1 1 auto;
        margin-right: 10.25%;
        @include md-block {
            margin-right: 0;
        }
    }

    &__image {
        position: relative;
        align-self: center;
        flex: 0 0 40.6666667%;
        @include md-block {
            display: none;
        }

        img {
            position: relative;
            z-index: 1;
            width: 100%;
        }
        &::after {
            content: "";
            position: absolute;
            left: 23%;
            top: 15%;
            display: block;
            width: 279px;
            height: 279px;
            background: #00a19c;
            opacity: 0.4;
            filter: blur(70px);
        }
        &--mobile {
            display: none;
            @include md-block {
                display: block;
                margin-bottom: 10px;
            }
            @include xs-block {
                &:after {
                    width: 160.08px;
                    height: 159.83px;
                }
            }
        }
    }

    &__title {
        margin-bottom: 24px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 138%;
        color: #ffffff;
        @include af(32, 20);
        @include md-block {
            margin-bottom: 16px;
        }
        @include xs-block {
            max-width: 260px;
        }
    }

    &__text--green {
        margin-bottom: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 133%;
        color: #00a19c;
        @include md-block {
            display: none;
        }
    }

    &__text {
        margin-bottom: 40px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #898989;
        @include md-block {
            display: none;
        }
    }

    &__button {
        @include md-block {
            .button {
                width: 100%;
            }
        }
    }
    &__button-text {
        @include md-block {
            display: none;
        }
    }
    &__button-text--mobile {
        display: none;
        @include md-block {
            display: inline;
        }
    }
}
.container {
}
</style>
