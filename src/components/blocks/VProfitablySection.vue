<template>
    <section class="profitably">
        <div class="container">
            <div class="profitably__body">
                <div class="profitably__texts">
                    <h2 class="profitably__title">С ABS-AUTO выгодно</h2>
                    <p class="profitably__text">Акции и спецпредложения компании</p>
                </div>
                <div class="profitably__cards">
                    <div
                        class="profitably__card card-profitably"
                        v-for="item in profitablyCardItems"
                        :key="item.title"
                    >
                        <div class="card-profitably__image">
                            <img
                                :src="item.img"
                                :alt="item.title"
                            />
                        </div>
                        <div class="card-profitably__texts">
                            <h4 class="card-profitably__title">{{ item.title }}</h4>
                            <p class="card-profitably__text">{{ item.text }}</p>
                        </div>
                        <div class="card-profitably__button">
                            <VButton>{{ item.textButton }}</VButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VButton from "../UI/VButton.vue"

export default {
    components: { VButton },
    data() {
        return {
            profitablyCardItems: [
                {
                    img: require("@/assets/img/main/profitable/image.png"),
                    title: "Бесплатная замена масла",
                    text: "При покупке масла в нашем автотехцентре замену мы сделаем для Вас бесплатно!",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/profitable/image2.png"),
                    title: "Бесплатная диагностика подвески",
                    text: "Предоставим все необходимые рекомендации по устранению неисправностей и поможем их устранить, если это необходимо.",
                    textButton: "Записаться",
                },
                {
                    img: require("@/assets/img/main/profitable/image4.png"),
                    title: "Выгодное ТО для любой иномарки",
                    text: "Лучшие цены на ТО одних их самых популярных марок автомобилей.",
                    textButton: "Подробнее",
                },
                {
                    img: require("@/assets/img/main/profitable/image1.png"),
                    title: "Автозапчасти собственной торговой марки ABSEL уже в продаже",
                    text: "Мы изучили сотни тысяч товаров, их характеристики, преимущества, выявили самые высокие стандарты качества и внедрили их в производство продуктов под нашим брендом.",
                    textButton: "Подробнее",
                },
                {
                    img: require("@/assets/img/main/profitable/image3.png"),
                    title: "Шины YOKOHAMA по специальным ценам",
                    text: "Приобретайте шины YOKOHAMA и получайте Расширенную Гарантию “САМУРАЙ”. При повреждении шины мы бесплатно заменим или отремонтируем ее.",
                    textButton: "Заказать шины",
                },
                {
                    img: require("@/assets/img/main/profitable/image5.png"),
                    title: "Экспресс-доставка оригинальных запчастей из Европы",
                    text: "Новая услуга для владельцев автомобилей Mercedes-Benz, BMW, VAG и Land Rover.",
                    textButton: "Подробнее",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;

.profitably {
    &__body {
        padding: 60px 80px;
        padding-right: 70px;
        @include xl-block() {
            padding: 40px 0;
        }
    }

    &__texts {
        margin-bottom: 24px;
    }

    &__title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #ffffff;
        @include af(32, 20);
    }

    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #898989;
    }

    &__cards {
        @include row-flex();
    }

    &__card {
        @include col();
        @include size(4);
        @include size-lg(6);
    }
}

.card-profitably {
    display: flex;
    flex-direction: column;
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
    }

    &__title {
        margin-bottom: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 133%;
        color: #ffffff;
    }
    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        color: #898989;
    }

    &__button {
        .button {
            background: transparent;
        }
    }
}
</style>
