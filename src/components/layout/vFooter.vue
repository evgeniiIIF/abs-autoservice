<template>
    <footer class='footer'>
        <div class="container">
            <div class="footer__body">
                <div class="footer__top">
                    <!-- <div class="footer__logo logo-footer">
            <div class="logo-footer__stars">
              <img v-for="star in 4" :key="star" src="@/assets/img/logo/Star.svg" alt="star">
            </div>
            <img src="@/assets/img/logo/text-footer.svg" alt="hotel" class="logo-footer__text">
            <img src="@/assets/img/logo/STAVROPOL.png" alt="STAVROPOL" class="logo-footer__text">
          </div> -->
                    <div class="footer__social social-footer">
                        <p class="social-footer__text">Мы в соц. сетях</p>
                        <div class="social-footer__items">
                            <div class="social-footer__item">
                                <img src="@/assets/img/footer/FB.svg" alt="fb">
                            </div>
                            <div class="social-footer__item">
                                <img src="@/assets/img/footer/WhatsApp.svg" alt="w">
                            </div>
                            <div class="social-footer__item">
                                <img src="@/assets/img/footer/VK.svg" alt="vk">
                            </div>
                        </div>
                    </div>
                </div>

                <p class="footer__bottom">
                    © Hotel Stavropol, 2020
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'vFooter'
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.footer {
    background: #424343;
    border-radius: 20px 20px 0px 0px;

    &__body {
        padding-top: 48px;
        padding-bottom: 12px;

    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 41px;

        @include to(600px) {
            flex-direction: column;
            align-items: start;
            margin-bottom: 60px;
        }
    }

    &__logo {
        @include to(600px) {
            margin-bottom: 40px;
        }
    }

    &__social {}

    &__bottom {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
}


.logo-footer {
    width: 109px;
    display: flex;
    flex-direction: column;

    @include mb(6px);

    &__stars {
        @include mr(2px);

    }

    &__text {}
}

.social-footer {

    &__text {
        margin-bottom: 16px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }

    &__items {
        display: flex;
        @include mr(20px)
    }

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        background: #ACADA5;
        border-radius: 16px
    }
}
</style>