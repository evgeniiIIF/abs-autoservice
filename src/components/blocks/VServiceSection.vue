<template>
    <section class="service">
        <div class="container">
            <div class="service__body ibg">
                <div class="service__image">
                    <picture>
                        <source
                            media="(min-width: 575px)"
                            srcset="@/assets/img/main/service/bg.jpg"
                        />
                        <source
                            media="(max-width: 576px)"
                            srcset="@/assets/img/main/service/bg_small.jpg"
                        />
                        <img
                            src="@/assets/img/main/service/bg.jpg"
                            alt="image"
                        />
                    </picture>
                </div>
                <div class="service__content content-service">
                    <div class="content-service__texts">
                        <h1 class="content-service__title">Обслуживание и ремонт вашего автомобиля в ABS-AUTO.</h1>
                        <ul class="content-service__list list-content-service">
                            <li
                                class="list-content-service__item"
                                v-for="item in ['Любая сложность', 'Честные цены', 'Гарантия на все виды работ']"
                                :key="item"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="content-service__buttons buttons-content-service">
                        <div class="buttons-content-service__button buttons-content-service--bg">
                            <VButton>Расситать стоимость</VButton>
                        </div>
                        <div class="buttons-content-service__button buttons-content-service--bd">
                            <VButton>Записаться на сервис</VButton>
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
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;

.service {
    margin: 24px 0 40px 0;

    &__body {
        padding: 80px 80px 144px;
        border-radius: 24px;
        overflow: hidden;
        @include md-block() {
            padding: 24px 0 40px 0;
        }
        @include sm-block() {
            margin: 0 -20px;
            padding: 24px 20px 40px 20px;
        }
    }

    &__image {
    }

    &__content {
        position: relative;
    }
}

.content-service {
    &__texts {
        margin-bottom: 48px;
        max-width: 689px;
        @include xl-block() {
            max-width: 450px;
        }
        @include lg-block() {
            max-width: 400px;
        }
        @include md-block() {
            max-width: 280px;
            margin-bottom: 40px;
        }
    }

    &__title {
        margin-bottom: 16px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        color: #ffffff;
        @include af(40, 24);
    }

    &__list {
    }

    &__buttons {
        display: flex;
        @include mr(20px);
        @include sm-block() {
            @include mr(0px);
            @include mb(20px);
            flex-direction: column;
            & .button {
                width: 100%;
            }
        }
    }
}
.list-content-service {
    display: flex;
    max-width: 560px;
    border-top: 1px solid $bd;
    border-bottom: 1px solid $bd;
    @include xl-block() {
        flex-direction: column;
        align-items: start;
        @include mb(4px);
        border: none;
    }

    &__item {
        white-space: nowrap;
        padding: 8px 20px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #e5e6e5;
        @include af(16, 14);
        @include xl-block() {
            padding: 4px 12px;
            background: rgba(42, 42, 42, 0.7);
            backdrop-filter: blur(4px);
            border-radius: 40px;
        }
    }
}
.buttons-content-service {
    &__button {
    }
}
.buttons-content-service--bg {
}
.buttons-content-service--bd {
    .button {
        background: transparent;
    }
}
</style>
