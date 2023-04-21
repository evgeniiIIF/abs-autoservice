<template>
  <div class='main-slider' id="Галерея">
    <div class="container">
      <VImagesSlider :slides="slides" />
    </div>
  </div>
</template>

<script>
import VImagesSlider from '../UI-FC/VImagesSlider.vue';

export default {
  components: {
    VImagesSlider
  },
  data() {
    return {
      slides: [
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
        { image: require("@/assets/img/main/main-image-slider/main-image-slider-image.jpg") },
      ],
    }
  }
}
</script>

<style lang='scss'>
.main-slider {
  .nav-slider {
    position: absolute;
    left: -26px;
    right: -26px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }

  .slide-slider {
    padding-top: 40.302267%;

  }
}

._mobile .main-slider {
  .container {

    padding: 0;
  }

  .nav-slider {
    display: none;
  }

  .progress-slider {
    display: flex;
  }
}
</style>