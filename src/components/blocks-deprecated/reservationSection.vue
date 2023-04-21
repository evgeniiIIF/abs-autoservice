<template>
  <section class='reservation'>
    <div class="container">
      <div class="reservation__body" ref="reservationBody">
        <div class="reservation__image-box ibg" ref="reservationImageBox">
          <picture>
            <source media="(min-width: 769px)" srcset="../../assets/img/main/reservation/STRO0974.jpg">
            <source media="(max-width: 768px)" srcset="../../assets/img/main/reservation/STRO0974-small.jpg">
            <img src="../../assets/img/main/reservation/STRO0974.jpg" alt="example image">
          </picture>
          <h1 class="reservation__title">Изысканный свадебный зал с панорамным видом на город</h1>
          <div class="reservation__form" ref="formReservation">
            <VForm :formData="reservationForm" @onShowDialog="$emit('onShowDialog')" />
          </div>
          <!-- <form class="reservation__form form-reservation" action="#" ref="formReservation">
            <h5 class="form-reservation__title">Узнайте свободные даты и забронируйте зал</h5>
            <div class="form-reservation__input" v-for="item in reservationForm" :key="item.name">
              <inputInLabel :opts="item" />
            </div>
            <div class="form-reservation__button">
              <baseButton>Забронировать</baseButton>
            </div>
          </form> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mobileMixin from '@/mixins/mobileMode';
import VForm from '../elements/VForm.vue';

export default {
  name: 'reservation',
  mixins: [mobileMixin],
  components: {
    VForm
  },
  data() {
    return {
      reservationForm: {
        title: 'Узнайте свободные даты и забронируйте зал',
        inputs: [
          { type: 'text', label: 'Ваше имя', name: "name", value: "Иван", placeholder: 'Имя' },
          { type: 'tel', label: 'Ваш номер телефона', name: "tel", placeholder: "+7 (___) ___-__-__" }
        ]
      }
    }
  },
  watch: {
    isMobile() {
      const form = this.$refs.formReservation
      const reservationBody = this.$refs.reservationBody
      const reservationImageBox = this.$refs.reservationImageBox

      if (this.isMobile) {
        reservationBody.appendChild(form)
      } else {
        reservationImageBox.appendChild(form)

      }
    }
  }
}
</script>


<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.reservation {

  &__body {
    border-radius: 16px;
    overflow: hidden;

    @include to(992px) {
      margin: 0 -15px;
      border-radius: 0;
    }
  }

  &__image-box {
    display: flex;
    padding: 56px 134px 56px 80px;

    @include to(1100px) {
      padding: 56px;
    }

    @include to(992px) {
      margin: 0 -15px;
      padding: 96px 20px 60px;
      justify-content: center;
      align-items: center;
    }
  }

  &__title {
    position: relative;
    align-self: flex-end;
    max-width: 770px;
    margin-right: auto;
    margin-bottom: 32px;
    font-weight: 700;
    line-height: 117%;
    color: #FFFFFF;
    @include adaptiv-font(48, 24);

    @include to(1490px) {
      margin-right: 100px;
    }

    @include to(992px) {
      margin: 0;
      text-align: center;
    }
  }

  &__form {
    position: relative;
    flex: 0 0 382px;

    .form {


      padding: 32px 40px 48px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      border-radius: 16px;

      @include to(992px) {
        padding-top: 12px;
        border-radius: 0;
      }

      &__body {
        display: flex;
        flex-direction: column;

        @include mb(16px);
      }



      &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 133%;
        color: #FFFFFF;

        @include to(992px) {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          color: #18191B;
        }
      }

      &__input {
        @include to(992px) {
          .input-in-label {
            &__label {
              color: #ACADA5;
            }
          }
        }
      }

      &__button {
        align-self: start;
      }
    }
  }
}
</style>


