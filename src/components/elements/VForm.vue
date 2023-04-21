<template>
  <form class="form" action="#">
    <h5 class="form__title" v-if="formData.title">{{ formData.title }}</h5>
    <div class="form__body">
      <div class="form__input" v-for="item in formData.inputs" :key="item.name">
        <inputInLabel :opts="item" />
      </div>
      <div class="form__button" @click="$emit('onShowDialog')">
        <baseButton>Забронировать</baseButton>
      </div>
    </div>
  </form>
</template>

<script>

import inputInLabel from '../UI/input-in-label.vue';
import baseButton from '../UI/base-button.vue';


export default {
  name: 'VForm',
  components: {
    inputInLabel,
    baseButton,
  },
  props: {
    formData: {
      type: Object,
      required: true
    }
  }
}
// exampleFormData : {
//   title: 'Узнайте свободные даты и забронируйте зал',
//     inputs: [
//       { type: 'text', label: 'Ваше имя', name: "name", value: "Иван", placeholder: 'Имя' },
//       { type: 'tel', label: 'Ваш номер телефона', name: "tel", placeholder: "+7 (___) ___-__-__" }
//     ]
// }
</script>

<style lang='scss'></style>