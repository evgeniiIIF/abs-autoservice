<template>
  <section class='meet' id="Отзывы">
    <div class="container">

      <div class="meet__body">
        <div class="meet__bg">
          <picture>
            <source media="(min-width: 769px)" srcset="@/assets/img/main/meet/bg.png">
            <source media="(max-width: 768px)" srcset="@/assets/img/main/meet/bg-small.png">
            <img src="@/assets/img/main/meet/bg.png" alt="bg">
          </picture>
        </div>
        <div class="meet__left">
          <h6 class="meet__title">Запланируйте встречу с администратором <span>ресторана Отеля</span></h6>
          <div class="meet__text">Мы обсудим Ваше мероприятие и обговорим все детали банкета,
            для того чтобы сделать
            его незабываемым</div>
          <div class="meet__form">
            <VForm :formData="formData" />
          </div>
        </div>
        <div class="meet__right right-meet">
          <div class="right-meet__image">
            <img src="@/assets/img/main/meet/gitl.png" alt="girl">
          </div>
          <div class="right-meet__text meet__text">Мы обсудим Ваше мероприятие и обговорим все детали банкета,
            для того чтобы сделать его незабываемым</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VForm from '../elements/VForm.vue';
import mobileMixin from '@/mixins/mobileMode';

export default {
  name: "meetSection",
  mixins: [mobileMixin],
  components: { VForm },
  data() {
    return {
      formData: {
        inputs: [
          { type: 'text', label: 'Ваше имя', name: "name", value: "Иван", placeholder: 'Имя' },
          { type: 'tel', label: 'Ваш номер телефона', name: "tel", placeholder: "+7 (___) ___-__-__" }
        ]
      }
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.meet {

  &__body {
    position: relative;
    display: flex;
    padding: 40px 89px 64px 48px;
    background: #F7F7F8;
    border-radius: 20px;

    @include to(768px) {
      margin: 0 -15px;
      padding: 30px 16px 40px;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &__left {
    flex: 1 0 784px;

    @include to(1330px) {
      flex: 1 1 100%;
    }
  }

  &__title {
    margin-bottom: 40px;
    font-weight: 700;
    line-height: 120%;
    color: #C6AF66;

    span {
      color: #222324;
    }

    @include adaptiv-font(40, 20);

    @include to(768px) {
      color: #222324;

    }
  }

  &__text {
    display: none;
    margin-bottom: 32px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #424343;

    @include to(1330px) {
      display: block;
    }
  }

  &__form {
    .form__body {
      display: flex;
      align-items: end;
      @include mr(16px);

      @include to(768px) {
        flex-direction: column;
        align-items: stretch;
        @include mr(0px);
        @include mb(16px)
      }
    }

    .input-in-label__label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #ACADA5;
    }
  }

  &__right {
    flex: 0 1 623px;

    @include to(992px) {
      flex: 0 0 0px;
    }
  }
}

.right-meet {
  display: flex;
  align-items: end;
  justify-content: end;

  &__image {
    position: absolute;
    right: 18.7657431%;
    bottom: 0;

    @include to(1330px) {
      right: 4%;

    }

    @include to(1130px) {
      display: none;
    }
  }

  &__text {
    @include to(1330px) {
      display: none;
    }

    max-width: 293px;
    padding: 20px 20px 20px 24px;
    margin-bottom: 8px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%);
    border: 1px solid #C6AF66;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 20px;
  }
}
</style>