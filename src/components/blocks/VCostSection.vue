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
                        <div class="quest-cost__image"></div>
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
    }

    &__texts {
        margin-bottom: 40px;
    }

    &__title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 138%;
        color: #ffffff;
    }

    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #898989;
    }

    &__quest {
    }
}

.quest-cost {
    background: #2a2a2a;
    border-radius: 16px;

    &__content {
    }

    &__image {
    }
}
</style>
