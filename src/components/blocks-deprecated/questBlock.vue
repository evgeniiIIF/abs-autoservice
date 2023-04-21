<template>
  <div class="quest">
    <div class="quest__progress progress-quest">
      <p class="progress-quest__text">Вопрос {{ currentQuestionNumber }} из {{ questionsCountAll }}</p>
      <div class="progress-quest__line">
        <div class="progress-quest__line-done" :style="{ width: progressQuestPercents + '%' }"></div>
      </div>
    </div>
    <div class="quest__radiogroup radiogroup-quest">
      <h6 class="radiogroup-quest__question">{{ questionObject.question }}</h6>
      <div class="radiogroup-quest__row">
        <div class="radiogroup-quest__item" v-for="variant in questionObject.variants" :key="variant">
          <baseRadio
            :variant="variant"
            :currentPicked="questionObject.currentPicked"
            :name="questionObject.question"
            @changePicked="$emit('changePicked', $event)" />
        </div>
      </div>
    </div>
    <div class="quest__button-next button-with-icon">
      <baseButton v-if="currentQuestionNumber === questionsCountAll"
        :disabled="!(!!questionObject.currentPicked)">Отправить</baseButton>
      <baseButton v-else tag="button"
        type="button"
        :disabled="!(!!questionObject.currentPicked)"
        @click="$emit('toNextQuestion')">
        <span class=" button-with-icon__text">Следующий вопрос</span>
        <img src="@/assets/img/main/questions/keyboard_backspace_24px.svg" alt="arrow">
      </baseButton>
    </div>
  </div>
</template>

<script>
import baseRadio from '../UI/base-radio.vue';
import baseButton from '../UI/base-button.vue';

export default {
  name: 'quest',
  components: {
    baseRadio, baseButton
  },
  props: {
    questionsCountAll: {
      type: Number
    },
    currentQuestionNumber: {
      type: Number
    },
    progressQuestPercents: {
      type: Number,
    },
    questionObject: {
      type: Object
    },
  },

}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.quest {
  padding: 32px 40px;
  background: #F7F7F8;
  border-radius: 16px;

  @include to(992px) {
    padding: 30px 15px;

  }

  @include to(440px) {
    .base-radio {
      padding: 12px 8px;
    }

    .base-radio__flag {
      margin-right: 8px;
    }

    .base-radio__title {
      font-size: 14px;
    }
  }

  &__progress {
    margin-bottom: 32px;
  }

  &__radiogroup {}

  &__button-next {}
}

.progress-quest {

  &__text {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    color: #424343;
  }

  &__line {
    width: 100%;
    height: 4px;
    background: #fff;
  }

  &__line-done {
    width: 0%;
    height: 100%;
    transition: all .3s ease 0s;
    background: #C6AF66;
  }
}

.radiogroup-quest {

  &__question {
    margin-bottom: 24px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 133%;
    color: #424343;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    margin-bottom: 73px;
  }

  &__item {
    margin: 8px;
  }
}

.button-with-icon {

  &__text {}
}
</style>