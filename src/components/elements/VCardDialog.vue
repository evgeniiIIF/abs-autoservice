<template>
  <div class='card-dialog'>
    <button class="card-dialog__close" @click="onHideDialog"></button>
    <div class="card-dialog__content content-card-dialog">

      <div class="content-card-dialog__top">
        <h6 class="content-card-dialog__title">Оставьте заявку</h6>
        <p class="content-card-dialog__text">Скоро с вами свяжется администратор</p>
      </div>
      <p class="content-card-dialog__text-bottom">Нажимая на кнопку «Отправить», Вы соглашаетесь с Политикой
        конфиденциальности</p>
    </div>
    <div class="card-dialog__form">
      <VForm :formData="dialogForData" />
    </div>
  </div>
</template>

<script>
import VForm from './VForm.vue';

export default {
  name: "VCardDialog",
  components: { VForm },
  data() {
    return {
      dialogForData: {
        inputs: [
          { type: 'text', label: 'Ваше имя', name: "name", value: "Иван", placeholder: 'Имя' },
          { type: 'tel', label: 'Ваш номер телефона', name: "tel", placeholder: "+7 (___) ___-__-__" }
        ]
      }
    }
  },
  methods: {
    onHideDialog() {
      console.log('hidia');
      this.$emit('onHideDialog')
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.card-dialog {
  position: relative;
  display: flex;
  padding: 40px 80px 60px 40px;
  box-shadow: 0px 8px 16px rgba(34, 35, 36, 0.1);
  border-radius: 16px;
  opacity: 1;
  background: #FFFFFF;

  &__close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 42px;
    border: none;
    background: transparent;

    &::after,
    &::before {
      content: '';
      display: block;
      width: 25px;
      height: 4px;
      background: #000;
      position: absolute;
      left: 50%;
      top: 50%;
    }

    &::before {
      transform: translate(-50%, 50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, 50%) rotate(45deg);
    }
  }

  &__content {
    margin-right: 100px;
  }

  &__form {
    flex: 0 1 302px;

    .form__body {
      @include mb(16px)
    }

    .input-in-label__label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
      color: #ACADA5;
    }
  }
}

.content-card-dialog {
  display: flex;
  flex-direction: column;

  &__top {
    flex: 1 1 auto;
  }

  &__title {
    margin-bottom: 8px;
    font-family: 'P052';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    color: #C6AF66;
  }

  &__text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    color: #ACADA5;
  }

  &__text-bottom {
    width: 320px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
    color: #ACADA5;
  }
}
</style>