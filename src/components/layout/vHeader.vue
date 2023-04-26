<template>
    <header
        class="header js-header"
        :class="{ '_open-menu': showMobileMenu }"
        ref="jsHeader"
    >
        <div class="header__body">
            <div class="header__logo">
                <VLogo />
            </div>
            <div
                class="header__content js-mobile-menu"
                ref="jsMobileMenu"
            >
                <div class="header__nav">
                    <VNav :menuItems="menuItems" />
                </div>
                <div class="header__contacts contacts-header">
                    <div class="contacts-header__calls">
                        <div class="contacts-header__tel">
                            <VTel phoneNumber="+7 (8652) 500-520" />
                        </div>
                        <div class="contacts-header__feedback">
                            <VFeedback>обратный звонок</VFeedback>
                        </div>
                    </div>
                    <div class="contacts-header__social">
                        <div class="contacts-header__socal-item button-header">
                            <VWhatsapp whatsappNumber="+79887516613" />
                        </div>
                        <div class="contacts-header__socal-item button-header">
                            <VTelegram telegramUserName="https://t.me/E888VG" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="header__mobile-buttons buttons-mobile">
                <div class="buttons-mobile__feedback button-header">
                    <VFeedback>
                        <img
                            src="@/assets/img/header/Phone.svg"
                            alt="phone"
                        />
                    </VFeedback>
                </div>
                <div class="buttons-mobile__burger button-header">
                    <VBurgerIcon />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import mobileMixin from "@/mixins/mobileMode"
import bodyLockMixin from "@/mixins/bodyLock"
import computedHeaderHeight from "@/mixins/computedHeaderHeight"

import baseButton from "../UI/base-button.vue"
import VBurgerIcon from "../UI/VBurgerIcon.vue"
import VLogo from "../UI/VLogo.vue"
import VNav from "../UI/VNav.vue"
import VTel from "../UI/VTel.vue"
import VFeedback from "../UI/VFeedback.vue"
import VWhatsapp from "../UI/VWhatsapp.vue"
import VTelegram from "../UI/VTelegram.vue"
import { throwStatement } from "@babel/types"

export default {
    name: "vHeader",
    props: {
        showMobileMenu: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    mixins: [mobileMixin, bodyLockMixin, computedHeaderHeight],
    components: {
        baseButton,
        VBurgerIcon,
        VLogo,
        VNav,
        VTel,
        VFeedback,
        VWhatsapp,
        VTelegram,
    },
    data() {
        return {
            menuItems: ["Акции", "Расчёт стоимости", "Услуги", "Бонусная программа", "О автосервисе", "Контакты"],
        }
    },
    computed: {},
    watch: {
        showMobileMenu() {
            if (this.showMobileMenu) {
                this.lockBody()
            } else {
                this.unlockBody()
            }
        },
        isMobile() {
            this.setMobileMenuTop()
        },
        isMobileForHead() {
            this.setMobileMenuTop()
        },
    },

    methods: {
        setMobileMenuTop() {
            const mobileMenu = this.$refs.jsMobileMenu

            if (this.isMobileForHead) {
                let heightHeader = this.getComputedHeaderHeight()
                mobileMenu.style.top = heightHeader
                mobileMenu.style.height = `calc(100vh - ${heightHeader})`
            } else {
                mobileMenu.style.top = ""
                mobileMenu.style.height = ""
            }
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

$bg: rgba(17, 18, 18, 0.8);
$bd: #2a2a2a;
$hov: #00a19c;

.header {
    background: $bg;
    border-bottom: 1px solid $bd;

    &__body {
        display: flex;
        justify-content: space-between;
    }

    &__logo {
        display: flex;
        align-items: center;
        margin-left: 40px;
        margin-right: 99px;
        ._mobile & {
            margin-right: auto;
            margin-left: 20px;
        }
    }

    &__content {
        flex: 1 1 auto;
        display: flex;
        justify-content: space-between;
        ._mobile--header & {
            flex-direction: column;
            justify-content: start;
            padding: 20px;
            padding-bottom: 0;
        }
    }

    &__nav {
        display: flex;
        align-items: flex-end;
        ._mobile--header & {
            flex: 1 1 auto;
            align-items: flex-start;
            margin-bottom: 60px;
        }

        .nav {
            ._mobile--header & {
                width: 100%;
            }
            &__list {
                display: flex;
                flex-wrap: wrap;
                @include mr(16px);
                ._mobile--header & {
                    @include mr(0px);
                    flex-direction: column;
                }
            }

            &__item {
                padding: 0 8px;
                padding-bottom: 32px;
                border-bottom: 2px solid transparent;

                &:hover {
                    background: radial-gradient(59.7% 50.89% at 50% 100%, rgba(0, 161, 156, 0.22) 0%, rgba(0, 161, 156, 0) 100%);

                    border-color: $hov;
                }
                ._mobile--header & {
                    padding: 12px 0;
                    border-bottom: 1px solid #2a2a2a;
                }
            }

            &__link {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #999999;
                font-stretch: 100;
                ._mobile--header & {
                    color: #ffffff;
                    font-stretch: 100;
                }
            }
        }
    }

    &__contacts {
    }

    &__mobile-buttons {
        display: none;

        @include to(1520px) {
            display: flex;

            .buttons-mobile__burger {
                display: none;
            }
        }
    }
}

.button-header {
    border-left: 1px solid $bd;

    a,
    & > img,
    button,
    .burger-icon {
        display: block;
        padding: 32px;
    }
}

.buttons-mobile {
    &__feedback {
    }

    &__burger {
    }
}

.contacts-header {
    display: flex;
    align-items: center;

    @include to(1520px) {
        display: none;
    }
    ._mobile--header & {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid $bd;
        align-items: flex-start;
        margin: 0 -20px;
        padding-left: 20px;
    }

    &__calls {
        margin-right: 50px;
        ._mobile--header & {
            margin-right: 10px;
        }
    }

    &__tel {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 188%;
        color: #ffffff;
    }

    &__feedback {
        text-align: right;
        ._mobile--header & {
            text-align: left;
        }
        .feedback {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-decoration: underline;
            color: #ffffff;
        }
    }

    &__social {
        display: flex;
    }

    &__socal-item {
    }
}

//+++++++++++++ mobile menu ++++++++++++
._mobile--header {
    .js-header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 100;

        .js-mobile-menu {
            position: fixed;
            left: 100%;
            width: 100%;
            height: 100%;
            z-index: 100;
            overflow: auto;
            transition: all 0.3s ease 0s, background 0s ease 0s;
            background: rgba(0, 0, 0, 0.9);
        }
    }

    .buttons-mobile__burger {
        display: block;
    }
}

._mobile {
    .button-header {
        a,
        & > img,
        button,
        .burger-icon {
            display: block;
            padding: 16px;
        }
    }
}

._mobile--header ._open-menu {
    .header__content {
        left: 0;
    }
    .burger-icon {
        &__body {
            justify-content: center;
        }
        &__item {
            transition: all 0.3s ease 0s;
        }
        &__item--top {
            width: 100%;
            transform: translateY(50%) rotate(45deg);
        }
        &__item--middle {
            display: none;
        }
        &__item--bottom {
            width: 100%;
            transform: translateY(-50%) rotate(-45deg);
        }
    }
}

._mobile ._open-menu {
}
</style>
