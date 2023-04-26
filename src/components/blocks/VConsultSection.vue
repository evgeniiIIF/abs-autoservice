<template>
    <section class="consult">
        <div class="container">
            <div class="consult__body">
                <div class="consult__content">
                    <div class="consult__texts">
                        <h3 class="consult__title">Проконсультируйтесь по всем услугам автосервиса</h3>
                        <p class="consult__text">Не нашли информацию по интересующим работам? Оставьте заявку или просто напишите нам в мессенджеры</p>
                    </div>
                    <div class="consult__form">
                        <VForm :formData="formData" />
                    </div>
                    <p class="consult__agree">Нажимая кнопку, вы соглашаетесь с нашей Политикой конфиденциальности</p>
                    <div class="consult__social">
                        <div class="consult__social-tg">
                            <VTelegram />
                        </div>
                        <div class="consult__social-wc">
                            <VWhatsapp />
                        </div>
                    </div>
                </div>

                <div class="consult__image ibg">
                    <img
                        src="@/assets/img/main/consult/consult_image.png"
                        alt="consult"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VButton from "../UI/VButton.vue"
import VTelegram from "../UI/VTelegram.vue"
import VWhatsapp from "../UI/VWhatsapp.vue"
import VForm from "../elements/VForm.vue"

export default {
    components: { VButton, VForm, VTelegram, VWhatsapp },
    data() {
        return {
            formData: {
                inputs: [
                    {
                        type: "text",
                        name: "userName",
                        label: "Имя",
                        placeholder: "Введите имя",
                    },
                    {
                        type: "tel",
                        name: "tel",
                        label: "Телефон",
                        placeholder: "+7 (___) ___-__-__",
                    },
                ],
                buttonText: "Оставить заявку",
            },
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/smart-grid.scss";
@import "@/assets/scss/mixins.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;

.consult {
    padding: 40px 0 80px;
    @include md-block {
        padding: 20px 0px 0px;
    }
    @include xs-block {
        & .container {
            padding: 0;
        }
    }
    &__body {
        position: relative;
        padding: 40px;
        border-radius: 16px;
        background: #2a2a2a;
        @include lg-block() {
            padding: 40px 20px;
        }
    }

    &__content {
    }

    &__texts {
        max-width: 632px;
        margin-bottom: 24px;
    }

    &__title {
        margin-bottom: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 138%;
        color: #ffffff;
        @include af(32, 18);
    }

    &__text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #898989;
        @include af(16, 14);
    }

    &__form {
        margin-bottom: 8px;
        .form {
            &__body {
                display: flex;
                align-items: flex-end;
                @include mr(20px);
                @include md-block() {
                    @include mr(0px);
                    @include mb(20px);

                    align-items: start;
                    flex-direction: column;
                }
            }

            &__input {
                flex: 0 1 220px;
                @include md-block() {
                    flex: 0 0 auto;
                    width: 100%;
                }
            }

            &__button {
                .button {
                    height: 44px;
                    padding: 10px 24px;
                }
            }
        }
    }

    &__agree {
        margin-bottom: 24px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: #999999;
    }

    &__social {
        display: flex;
        @include mr(20px);
    }

    &__social-tg {
        .telegram {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            border-radius: 4px;
            background: #00a19c;
        }
    }

    &__social-wc {
        .whatsapp {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            border-radius: 4px;
            background: #00a19c;
        }
    }

    &__image {
        padding-top: 32%;
        padding-right: 40.6666667%;
        @include xl-block() {
            padding-top: 30%;
            padding-right: 38%;
        }
        @include lg-block() {
            display: none;
        }
        &.ibg {
            position: absolute;
            right: 0;
            bottom: 0;
            @include xl-block() {
                right: -33px;
            }
        }
    }
}
</style>
