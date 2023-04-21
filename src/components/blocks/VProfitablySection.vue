<template>
    <section class="profitably">
        <div class="container">
            <div class="profitably__body">
                <div class="profitably__texts">
                    <h2 class="profitably__title">С ABS-AUTO выгодно</h2>
                    <p class="profitably__text">Акции и спецпредложения компании</p>
                </div>
                <div
                    class="profitably__cards"
                    ref="jsProggressBar"
                    @scroll="getProgressPercentsX"
                >
                    <div class="profitably__cards-body">
                        <div
                            class="profitably__card"
                            v-for="opts in profitablyCardItems"
                            :key="opts.title"
                        >
                            <VCardProfitably :opts="opts" />
                        </div>
                    </div>
                </div>
                <div class="profitably__progress">
                    <VProgressBarX :percent="process" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VButton from "../UI/VButton.vue"
import VProgressBarX from "../UI/VProgressBarX.vue"
import VCardProfitably from "../cards/VCardProfitably.vue"

export default {
    components: { VButton, VCardProfitably, VProgressBarX },
    data() {
        return {
            process: "0",

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
    methods: {
        getProgressPercentsX() {
            const progressContainer = this.$refs.jsProggressBar
            const scrollWidth = progressContainer.scrollWidth - progressContainer.offsetWidth
            const scrollProgress = (progressContainer.scrollLeft / scrollWidth) * 100
            this.process = scrollProgress + "%"
        },
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
        @include md-block() {
            position: relative;
            overflow-x: auto;
            min-height: 265px;
            margin: 0 -20px;
            margin-bottom: 43px;
        }
        &::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        & {
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
    }

    &__cards-body {
        @include row-flex();

        @include md-block() {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            margin: 0;
            padding: 0 20px;

            flex-wrap: nowrap;
        }
    }

    &__card {
        @include col();
        @include size(4);
        @include size-lg(6);
        @include md-block() {
            width: 240px;
        }
    }

    &__cards-body {
        @include md-block() {
            & > * {
                margin: 0;
            }
            @include mr(20px);
        }
    }
}
</style>
