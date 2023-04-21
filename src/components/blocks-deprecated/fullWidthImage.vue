<template>
  <div class='full-width-image'>
    <div class="full-width-image__image ibg">
      <picture>
        <source media="(min-width: 769px)" srcset="../../assets/img/main/full-width-image/full-width-image.jpg">
        <source media="(max-width: 768px)" srcset="../../assets/img/main/full-width-image/full-width-image-small.jpg">
        <img src="../../assets/img/main/full-width-image/full-width-image.jpg" alt="image">
      </picture>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
.full-width-image {
  position: relative;
  padding-top: 26.25%;


  & .ibg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__image {}
}
</style>