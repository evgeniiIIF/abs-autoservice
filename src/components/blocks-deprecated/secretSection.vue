<template>
  <section class='secret' id="Выездная регистрация">
    <div class="container">
      <div class="secret__body">
        <div class="secret__content">
          <h3 class="secret__title">Секрет успешной свадьбы – в спокойных и счастливых молодых</h3>
          <p class="secret__text">Мы сделаем все, чтобы вы чувствовали себя комфортно на собственной свадьбе, а гости
            вспоминали ее самым вкусными и веселым событием в жизни!</p>
        </div>
        <div class="secret__image">
          <picture>
            <source media="(min-width: 769px)" srcset="@/assets/img/main/secret/Group-1019.png">
            <source media="(max-width: 768px)" srcset="@/assets/img/main/secret/Group-small.png">
            <img src="@/assets/img/main/secret/Group-1019.png" alt="image">
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'secretSection'
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.secret {

  &__body {
    position: relative;
    display: flex;
    padding: 48px 0 64px 80px;
    border-radius: 16px;
    background: radial-gradient(circle at -20% -300%, #FBEEDB 46%, #F7F7F8 50%);

    @include to(1600px) {
      background: radial-gradient(circle at 0% 200%, #FBEEDB 46%, #F7F7F8 50%);
      padding-bottom: 370px;
    }

    @include to(992px) {
      padding: 40px 23px;
      padding-bottom: 42%;
      background: radial-gradient(circle at 0% 95%, #FBEEDB 46%, #F7F7F8 50%);

    }

    @include to(992px) {
      padding-bottom: 50%;
    }

    @include to(768px) {
      padding-bottom: 200px;
    }

  }

  &__content {}

  &__title {
    max-width: 800px;
    margin-bottom: 24px;
    font-weight: 700;
    line-height: 120%;
    color: #C6AF66;
    @include adaptiv-font(40, 20)
  }

  &__text {
    max-width: 650px;
    font-weight: 400;
    line-height: 175%;
    color: #424343;
    @include adaptiv-font(16, 14)
  }

  &__image {
    max-width: 826px;
    position: absolute;
    top: -51px;
    right: -32px;

    img {
      width: 100%;
    }

    @include to(1600px) {
      top: auto;
      bottom: -47px;
    }

    @include to(768px) {}
  }
}
</style>