<template>
  <section class='individual-menu' id="Меню">
    <div class="container">
      <div class="individual-menu__body">
        <div class="individual-menu__left left-individual-menu">
          <div class="left-individual-menu__image">
            <img src="@/assets/img/main/individual-menu/rad-gr.png" alt="gradient">
          </div>
          <div class="left-individual-menu__top">
            <h3 class="left-individual-menu__title">Индивидуальное меню для <span>Вашего праздника</span></h3>
            <div class="left-individual-menu__services">
              <div class="left-individual-menu__service service-menu">
                <div class="service-menu__icon">
                  <img src="@/assets/img/main/individual-menu/room_service_24px.svg" alt="service-icon">
                </div>
                <p class="service-menu__text">Составим меню под любые предпочтения</p>
              </div>
              <div class="left-individual-menu__service service-menu">
                <div class="service-menu__icon">
                  <img src="@/assets/img/main/individual-menu/service2.svg" alt="service-icon">
                </div>
                <p class="service-menu__text">Можно со своим алкоголем или порекомендуем надёжных поставщиков</p>
              </div>
            </div>
          </div>
          <div class="left-individual-menu__form">
            <VForm :formData="individualMenuForm" />
          </div>
        </div>
        <div class="individual-menu__right right-individual-menu">
          <div class="right-individual-menu__image">
            <picture>
              <source media="(min-width: 854px)" srcset="@/assets/img/main/individual-menu/right-img.png">
              <source media="(max-width: 855px)" srcset="@/assets/img/main/individual-menu/right-img-small.png">
              <img src="@/assets/img/main/individual-menu/right-img.png" alt="image">
            </picture>
          </div>
          <div class="right-individual-menu__gradient">
            <img src="@/assets/img/main/individual-menu/right-gr.png" alt="gradient">
          </div>
          <h5 class="right-individual-menu__title">Скачайте пример банкетного меню на 50 человек</h5>
          <div class="right-individual-menu__button">
            <baseButton tag="button" type="button">
              <span class=" button-with-icon__text">Скачать пример</span>
              <img src="@/assets/img/main/questions/keyboard_backspace_24px.svg" alt="arrow">
            </baseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VForm from '../elements/VForm.vue';
import baseButton from '@/components/UI/base-button.vue'

export default {
  name: 'individualMenu',
  components: {
    VForm,
    baseButton
  },
  data() {
    return {
      individualMenuForm: {
        title: 'Получите полное банкетное меню',
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

.individual-menu {

  &__body {
    display: flex;

    @include to(1400px) {
      flex-direction: column;
    }
  }

  &__left {
    flex: 1 1 auto;
    margin-right: 21px;

    @include to(1400px) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }

  &__right {
    flex: 0 0 516px;

    @include to(1400px) {
      flex: 0 0 360px;
    }
  }
}

.left-individual-menu {
  position: relative;
  background: #F7F7F8;
  border-radius: 16px;
  overflow: hidden;

  &__image {
    position: absolute;
    left: 0;
    top: 0;
  }

  &__top {
    position: relative;
    padding: 40px 48px;
    border-bottom: 1px solid #E9EAEC;

    @include to(855px) {
      padding: 30px 20px 24px;
    }
  }

  &__title {
    margin-bottom: 32px;
    font-weight: 700;
    line-height: 120%;
    color: #18191B;
    @include adaptiv-font(40, 20);

    span {
      color: #C6AF66;
    }
  }

  &__services {
    display: flex;
    @include mr(60px);

    @include to(855px) {
      @include mr(0px);
      @include mb(40px);

      flex-direction: column;
    }
  }

  &__service {}

  &__form {
    padding: 28px 48px 40px;
    border-top: 1px solid #fff;

    @include to(855px) {
      padding: 16px 20px 32px;
    }

    .form {

      &__body {
        display: flex;
        align-items: flex-end;

        @include mr(16px);

        @include to(855px) {
          @include mr(0px);
          @include mb(16px);
          flex-direction: column;
          align-items: unset;
        }
      }

      &__title {
        margin-bottom: 8px;
        font-weight: 700;
        line-height: 167%;
        color: #424343;
        @include adaptiv-font(24, 20);
      }

    }

    .input-in-label {
      &__label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 125%;
        color: #ACADA5;
      }
    }
  }
}

.service-menu {
  display: flex;
  align-items: center;

  &__icon {
    flex: 0 0 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    box-shadow: 8px 8px 16px -4px rgba(172, 173, 165, 0.2);
    border-radius: 16px;
    background: #FFFFFF;
  }

  &__text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: #424343;
    @include adaptiv-font(20, 14)
  }
}

.right-individual-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 47px 46px;
  background: #F7F7F8;
  border-radius: 16px;

  @include to(855px) {
    justify-content: start;
    align-items: center;
    padding: 0;
    padding-top: 30px;
  }

  &__image {
    position: absolute;
    right: 0;
    bottom: -32px;

    @include to(855px) {
      position: relative;
      z-index: 1;
      bottom: 0;
      order: 1;
      align-self: end;
      border-radius: 0 0 16px 0;
      overflow: hidden;
    }
  }

  &__gradient {
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0 0 0 16px;
    overflow: hidden;

  }

  &__title {
    position: relative;
    font-weight: 700;
    line-height: 133%;
    color: #424343;
    @include adaptiv-font(24, 20);

    @include to(855px) {
      text-align: center;
      margin-bottom: 24px;
      padding: 0 16px;
    }
  }

  &__button {
    position: relative;

    img {
      transform: rotate(90deg);
    }

    @include to(855px) {
      margin-bottom: 21px;
    }
  }
}
</style>