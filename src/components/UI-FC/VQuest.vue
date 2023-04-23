<template>
    <div class="quest">
        <div class="quest__progress"></div>
        <div class="quest__question">
            <component
                :is="currentQuestionOpts.componentIs"
                :opts="currentQuestionOpts"></component>
        </div>
        <div class="quest__button">
            <VButton @click="nextQuestion">button</VButton>
        </div>
    </div>
</template>

<script>
import mobileMixin from "@/mixins/mobileMode"

import VButton from "../UI/VButton.vue"
import VQuestion1 from "@/components/questions/VQuestion1.vue"
import VQuestion2 from "@/components/questions/VQuestion2.vue"

export default {
    name: "quest",
    components: {
        VButton,
        VQuestion1,
        VQuestion2,
    },
    // props: {
    //     questionsCountAll: {
    //         type: Number,
    //     },
    //     currentQuestionNumber: {
    //         type: Number,
    //     },
    //     progressQuestPercents: {
    //         type: Number,
    //     },
    //     questionObject: {
    //         type: Object,
    //     },
    // },

    mixins: [mobileMixin],

    data() {
        return {
            showQuestForMobile: false,
            currentQuestionNumber: 1,

            questions: [
                {
                    componentIs: "VQuestion1",
                    title: "1. Заполните информацию об автомобиле",
                    inputOpts: {
                        label: "Марка и модель авто",
                        type: "text",
                        name: "auto",
                        placeholder: "Введите данные автомобиля",
                    },
                },
                {
                    componentIs: "VQuestion2",
                    title: "2. Опишите вашу проблему / что нужно сделать?",
                    inputOpts: {
                        textarea: true,
                        cols: 30,
                        rows: 5,
                        label: "Комментарий",
                        type: "textarea",
                        name: "problem",
                        placeholder: "Опишите проблему",
                    },
                },
            ],
        }
    },
    computed: {
        currentQuestionOpts() {
            return this.questions[this.currentQuestionNumber - 1]
        },
        questionsCountAll() {
            return this.questions.length
        },

        progressQuestPercents() {
            let done = 0
            let result

            for (let i = 0; i < this.questionsCountAll; i++) {
                if (this.questions[i].currentPicked !== "") {
                    done++
                }
            }
            result = (done / this.questionsCountAll) * 100
            return result
        },
    },
    methods: {
        updatePicked(variant) {
            this.currentQuestionOpts.currentPicked = variant
        },
        nextQuestion() {
            if (this.currentQuestionNumber < this.questions.length) {
                this.currentQuestionNumber++
            }
        },
    },
    watch: {
        isMobile() {
            if (!this.isMobile) {
                this.showQuestForMobile = false
            }
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";

.quest {
    color: #fff;
    font-size: 32px;
}
</style>

<!-- 
<VQuest
:questionObject="currentQuestionOpts"
:progressQuestPercents="progressQuestPercents"
:currentQuestionNumber="currentQuestionNumber"
:questionsCountAll="questionsCountAll"
@changePicked="updatePicked"
@toNextQuestion="nextQuestion"
/> -->
