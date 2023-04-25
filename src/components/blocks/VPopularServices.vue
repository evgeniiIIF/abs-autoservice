<template>
    <div class="popular-services">
        <div class="container">
            <div class="popular-services__body">
                <h3 class="popular-services__title">Популярные услуги в ABS-AUTO</h3>
                <h3 class="popular-services__title--mobile popular-services__title">Узнайте подробнее об услугах в ABS-AUTO</h3>
                <div class="popular-services__cards">
                    <div
                        class="popular-services__card card-popular-services"
                        v-for="item in cardItems"
                        :key="item.title"
                    >
                        <div class="card-popular-services__image">
                            <img
                                :src="item.img"
                                :alt="item.title"
                            />
                        </div>
                        <div class="card-popular-services__body">
                            <h4 class="card-popular-services__title">{{ item.title }}</h4>
                            <div class="card-popular-services__button">
                                <VButton
                                    tag="button"
                                    type="button"
                                >
                                    <span class="card-popular-services__text-button">
                                        {{ item.textButton }}
                                    </span>
                                    <img
                                        class="card-popular-services__img-button"
                                        src="@/assets/img/main/popular-services/Add_Plus_20px.svg"
                                        alt="plus"
                                    />
                                </VButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VButton from "../UI/VButton.vue"

export default {
    data() {
        return {
            cardItems: [
                {
                    img: require("@/assets/img/main/popular-services/image1.png"),
                    title: "Техническое обслуживание",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image2.png"),
                    title: "Диагностика автомобиля",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image3.png"),
                    title: "3D развал-схождение",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image4.png"),
                    title: "Ремонт двигателей",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image5.png"),
                    title: "Ремонт Акпп",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image6.png"),
                    title: "Ремонт электрики",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image7.png"),
                    title: "Ремонт подвески",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image8.png"),
                    title: "Ремонт тормозной системы",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/popular-services/image9.png"),
                    title: "Шиномонтаж",
                    textButton: "Записаться",
                },
            ],
        }
    },
    components: { VButton },
}
</script>
<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

.popular-services {
    &__body {
    }

    &__title {
        margin-bottom: 32px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 138%;
        color: #ffffff;
        @include af(32, 20);
        @include md-block() {
            display: none;
        }

        &--mobile {
            display: none;
            @include md-block() {
                display: block;
            }
        }
    }

    &__cards {
        @include row-flex();
        @include md-block() {
            margin: -4px;
        }
    }

    &__card {
        @include col();
        @include size(4);
        @include size-lg(6);
        @include size-md(12);
        @include md-block() {
            margin: 4px;
        }
    }
}

.card-popular-services {
    display: flex;
    padding: 12px;
    border: 1px solid #2a2a2a66;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%);
    @include md-block() {
        padding: 3px 8px;
        align-items: center;
    }

    &__image {
        flex: 0 0 128px;
        width: 128px;
        height: 128px;
        margin-right: 12px;
        img {
            width: 100%;
            height: 100%;
        }
        @include md-block() {
            flex: 0 0 42px;
            width: 42px;
            height: 42px;
        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        padding: 12px 0;
        @include md-block() {
            flex-direction: row;
            flex: 1 1 auto;
            justify-content: center;
            align-items: center;
        }
    }

    &__title {
        flex: 1 1 auto;
        margin-bottom: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 133%;
        color: #ffffff;
        @include md-block() {
            margin-bottom: 0;
        }
        @include xs-block() {
            font-size: 12px;
        }
    }

    &__button {
        .button {
            padding: 8px 16px;

            @include md-block() {
                width: 24px;
                height: 24px;
                padding: 0;
                border: none;
                background: transparent;
            }
        }
    }
    &__text-button {
        @include md-block() {
            display: none;
        }
    }
    &__img-button {
        display: none;
        width: 100%;
        height: 100%;

        @include md-block() {
            display: block;
        }
    }
}
</style>
