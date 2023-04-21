<template>
  <section class='questions' id="Расчёт стоимости">
    <div class="container">
      <div class="questions__body">
        <h2 class="questions__title">Рассчитайте стоимость вашего банкета</h2>
        <p class="questions__text" v-if="isMobile">Ответьте на 5 вопросов и получите горку из шампанского в подарок</p>
        <div class="questions__row">
          <div class="questions__quest" v-if="!isMobile || showQuestForMobile">
            <questBlock
              :questionObject="currentQuestionObject"
              :progressQuestPercents="progressQuestPercents"
              :currentQuestionNumber="currentQuestionNumber"
              :questionsCountAll="questionsCountAll"
              @changePicked="updatePicked"
              @toNextQuestion="nextQuestion" />
          </div>
          <div class="questions__right right-questions" v-if="!showQuestForMobile">
            <div class="right-questions__images images-questions">
              <div class="images-questions__bg ibg">
                <picture>
                  <source media="(min-width: 991px)" srcset="../../assets/img/main/questions/f.png">
                  <source media="(max-width: 992px)" srcset="../../assets/img/main/questions/f-small.png">
                  <img src="../../assets/img/main/questions/f.png" alt="image">
                </picture>
              </div>
              <div class="images-questions__image">
                <picture>
                  <source media="(min-width: 991px)" srcset="../../assets/img/main/questions/b.png">
                  <source media="(max-width: 992px)" srcset="../../assets/img/main/questions/b-small.png">
                  <img src="../../assets/img/main/questions/b.png" alt="image">
                </picture>
              </div>
            </div>
            <p class="right-questions__text" v-if="!isMobile">Ответьте на 5 вопросов и получите горку из шампанского
              вподарок</p>
            <div class="right-questions__button" v-else>
              <baseButton tag="button"
                type="button"
                @click="showQuestForMobile = true">
                <span class=" button-with-icon__text">Начать</span>
                <img src="@/assets/img/main/questions/keyboard_backspace_24px.svg" alt="arrow">
              </baseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import mobileMixin from "@/mixins/mobileMode"
import questBlock from "./questBlock.vue"
import baseButton from "../UI/base-button.vue"

export default {
  name: 'questionsSection',
  mixins: [mobileMixin],

  components: {
    questBlock, baseButton
  },
  data() {
    return {
      showQuestForMobile: false,
      currentQuestionNumber: 1,
      questions: [
        {
          question: 'Количество гостей',
          currentPicked: '5-30',
          variants: [
            '5-30',
            '30-60',
            '60-80',
            '80-100',
            '100-120',
          ],
        },
        {
          question: 'Текст вопраса ',
          currentPicked: '',
          variants: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
          ],
        },
        {
          question: 'Текст вопраса ',
          currentPicked: '',
          variants: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
        },
        {
          question: 'Текст вопраса ',
          currentPicked: '',
          variants: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
          ],
        },
        {
          question: 'Текст вопраса ',
          currentPicked: '',
          variants: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
        },

      ]
    }
  }
  ,
  computed: {
    currentQuestionObject() {
      return this.questions[this.currentQuestionNumber - 1]
    },
    questionsCountAll() {
      return this.questions.length
    },

    progressQuestPercents() {
      let done = 0;
      let result;

      for (let i = 0; i < this.questionsCountAll; i++) {
        if (this.questions[i].currentPicked !== '') {
          done++
        }
      }
      result = (done / this.questionsCountAll) * 100
      return result
    }
  },
  methods: {
    updatePicked(variant) {
      this.currentQuestionObject.currentPicked = variant
    },
    nextQuestion() {
      if (this.currentQuestionNumber < this.questions.length) {
        this.currentQuestionNumber++
      }
    }
  },
  watch: {
    isMobile() {
      if (!this.isMobile) {
        this.showQuestForMobile = false
      }
    }
  }

}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.questions {

  &__body {}

  &__title {
    margin-bottom: 13px;
    font-weight: 700;
    line-height: 120%;
    color: #18191B;
    @include adaptiv-font(40, 20);

    @include to(992px) {
      margin-bottom: 4px;
    }
  }

  &__text {
    margin-bottom: 24px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #63636F;

    @include to(440px) {
      max-width: 250px;
    }
  }

  &__row {
    display: flex;
    min-height: 280px;

    @include to(992px) {
      margin: 0 -15px;
    }
  }

  &__quest {
    flex: 0 1 918px;
    margin-right: 20px;

    @include to(992px) {
      margin-right: 0;
    }
  }

  &__right {
    flex: 1 1 650px;
  }
}

.right-questions {
  position: relative;
  display: flex;
  align-items: end;
  padding: 32px 40px;
  border-radius: 16px;
  background: #F7F7F8;

  @include to(992px) {
    padding: 30px 16px;
  }

  &__images {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &__text {
    position: relative;
    max-width: 440px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 133%;
    color: #18191B;
  }

  &__button {
    position: relative;
  }
}

.images-questions {
  &__bg {
    &.ibg {
      position: absolute;
    }

    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>