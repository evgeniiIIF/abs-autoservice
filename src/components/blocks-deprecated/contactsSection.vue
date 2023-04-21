<template>
  <div class='contacts' id="Контакты">
    <div class="container">
      <div class="contacts__body">
        <div class="contacts__map">
          <VMapUIFC />
        </div>
        <div class="contacts__card card-contacts">
          <h5 class="card-contacts__title">Контакты</h5>
          <div class="card-contacts__top">
            <div class="card-contacts__contacts">
              <div class="card-contacts__phone">
                <a href="tel:+7123456789">+7 (123) 45-67-89</a>
                <div class="card-contacts__social">
                  <img src="@/assets/img/main/contacts/WhatsApp.svg" alt="WhatsApp">
                  <img src="@/assets/img/main/contacts/Telegram_20px.png" alt="Telegram">
                </div>
              </div>
              <div class="card-contacts__email">
                <a href="mailto:info@hotel.ru">info@hotel.ru</a>
              </div>
            </div>
          </div>
          <div class="card-contacts__center">
            <p class="card-contacts__address">355000, Россия, г. Ставрополь, ул. Пушкина 272</p>
            <button class="card-contacts__route">построить маршрут</button>
          </div>
          <div class="card-contacts__bottom">
            <p class="card-contacts__bottom-text">Остались вопросы?</p>
            <div class="card-contacts__button" @click="$emit('onShowDialog')">
              <BaseButton>Перезвоните мне</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VMapUIFC from '../UI-FC/VMapUIFC.vue';
import BaseButton from '../UI/base-button.vue';

export default {
  components: { VMapUIFC, BaseButton }
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.contacts {

  &__body {
    position: relative;
    display: flex;
    padding: 53px 44px 83px;

    @include to(992px) {
      padding: 0;
      flex-direction: column;
    }
  }

  &__map {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    overflow: hidden;

    @include to(992px) {
      position: relative;
      margin: 0 -15px;
      padding-top: 47%;
      border-radius: 0px;

      .map {
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    @include to(500px) {
      padding-top: 67%;

    }
  }

  &__card {}
}

.card-contacts {
  flex: 0 1 397px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  border-radius: 16px 16px 0 0;
  background: #F7F7F8;

  @include to(992px) {
    padding-top: 30px;
    margin-top: -32px;
  }

  &__title {
    padding: 0 40px;
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    color: #18191B;
    @include adaptiv-font(40, 20);

    @include to(992px) {
      padding: 0 20px;
    }
  }

  &__top {
    padding: 0 40px;

    @include to(992px) {
      padding: 0 20px;
    }
  }

  &__contacts {

    @include mb(16px)
  }

  &__phone {
    display: flex;

    a {

      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #424343;
      margin-right: 24px;

      @include to(330px) {
        margin-right: 0;
        margin-bottom: 16px;

      }
    }

    @include to(330px) {
      flex-direction: column;
    }
  }

  &__social {
    @include mr(21px)
  }

  &__email {
    margin-bottom: 16px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #18191B;
  }

  &__center {
    flex: 1 1 auto;
    padding: 0 40px;
    margin-bottom: 48px;

    @include to(992px) {
      padding: 0 20px;
      margin-bottom: 32px;
    }
  }

  &__address {
    max-width: 226px;
    margin-bottom: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #18191B;

  }

  &__route {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    background: transparent;
    border: none;
    color: #C6AF66;

  }

  &__bottom {
    padding: 32px 40px;
    padding-right: 10px;
    background: #FFFFFF;

    @include to(992px) {
      padding: 30px 20px;
      text-align: center;
    }
  }

  &__bottom-text {
    margin-bottom: 16px;
    font-weight: 700;
    line-height: 32px;
    color: #18191B;
    @include adaptiv-font(32, 20)
  }

  &__button {
    @include to(992px) {
      .base-button {
        width: 100%;
      }
    }
  }
}
</style>