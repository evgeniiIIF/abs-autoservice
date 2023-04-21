<template>
    <div class="quest">
        <div class="quest__progress">Progress</div>
        <div class="quest__question">
            <component is="VQuestion2"></component>
        </div>
        <div class="quest__button">
            <VButton>button</VButton>
        </div>
    </div>
</template>

<script>
import VButton from "../UI/VButton.vue"
import VQuestionCarData from "@/components/questions/VQuestionCarData.vue"
import VQuestion2 from "@/components/questions/VQuestion2.vue"

export default {
    name: "quest",
    components: {
        VButton,
        VQuestionCarData,
        VQuestion2,
    },
    props: {
        questionsCountAll: {
            type: Number,
        },
        currentQuestionNumber: {
            type: Number,
        },
        progressQuestPercents: {
            type: Number,
        },
        questionObject: {
            type: Object,
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/smart-grid.scss";
</style>

<!-- 
<VQuest
:questionObject="currentQuestionObject"
:progressQuestPercents="progressQuestPercents"
:currentQuestionNumber="currentQuestionNumber"
:questionsCountAll="questionsCountAll"
@changePicked="updatePicked"
@toNextQuestion="nextQuestion"
/> -->
