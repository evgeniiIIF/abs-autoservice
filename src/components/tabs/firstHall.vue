<template>
  <div class='first-hall'>
    <div class="first-hall__body">
      <div class="first-hall__image">
        <picture>
          <source media="(min-width: 992px)" srcset="@/assets/img/main/first-hall/first.png">
          <source media="(max-width: 991px)" srcset="@/assets/img/main/first-hall/first-small.png">
          <img src="@/assets/img/main/first-hall/first.png" alt="hall">
        </picture>
      </div>
      <div class="first-hall__card card-first-hall">
        <h6 class="card-first-hall__title">{{ tabData.title }}</h6>
        <ul class="card-first-hall__list list-card-first-hall">
          <li class="list-card-first-hall__item"
            v-for="item in tabData.list"
            :key="item.key">
            <p class="list-card-first-hall__key">{{ item.key }}</p>
            <p class="list-card-first-hall__value">{{ item.value }}</p>
          </li>
        </ul>
        <div class="card-first-hall__buttons">
          <div class="card-first-hall__button"
            @click="$emit('onShowDialog')">
            <baseButton>Забронировать</baseButton>
          </div>
          <div class="card-first-hall__button">
            <baseButton>Посмотреть галерею</baseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseButton from '@/components/UI/base-button.vue'

export default {
  props: {
    tabData: {
      type: Object,
    }
  },
  name: 'firstHall',
  components: {
    baseButton
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.first-hall {

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F7F7F8;
    border-radius: 0px 16px 16px 16px;
    padding: 12px 0;
    padding-right: 56px;

    @include to(992px) {
      margin: 0 -15px;
      flex-direction: column;
      padding: 16px;
    }
  }

  &__image {
    margin-left: 231px;

    @include to(1350px) {
      margin: 0 auto;
    }

    @include to(992px) {
      margin-bottom: 16px;
    }
  }

  &__card {
    flex: 0 1 586px;

    @include to(992px) {
      flex: 1 1 auto;
    }
  }
}

.card-first-hall {
  padding: 40px 40px 48px;
  box-shadow: 0px 8px 16px rgba(34, 35, 36, 0.1);
  border-radius: 16px;
  background: #FFFFFF;

  @include to(560px) {
    padding: 16px;
  }

  &__title {
    margin-bottom: 24px;
    font-weight: 700;
    line-height: 1;
    color: #18191B;
    @include adaptiv-font(32, 20)
  }

  &__list {
    margin-bottom: 32px;
  }

  &__buttons {
    display: flex;
    @include mr(16px);


    @include to(560px) {
      @include mr(0px);
      @include mb(16px);
      flex-direction: column;
    }
  }

  &__button {
    @include to(560px) {
      .base-button {
        width: 100%;
      }
    }

    &:last-child {
      .base-button {
        border: 2px solid #C6AF66;
        color: #C6AF66;
        background: transparent;
      }
    }
  }
}

.list-card-first-hall {
  @include mb(8px);

  &__item {
    display: flex;
    border-bottom: 2px solid #E9EAEC;
    padding-bottom: 8px;
  }

  &__key {
    width: 50%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    color: #ACADA5;
  }

  &__value {
    width: 50%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    color: #18191B;
  }
}
</style>