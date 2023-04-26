<template>
    <form
        class="form"
        action="#"
    >
        <h5
            class="form__title"
            v-if="formData.title"
        >
            {{ formData.title }}
        </h5>
        <div class="form__body">
            <div
                class="form__input"
                v-for="inputData in formData.inputs"
                :key="inputData.name"
            >
                <VInput :opts="inputData" />
            </div>
            <div class="form__button">
                <VButton>
                    {{ formData.buttonText }}
                </VButton>
            </div>
        </div>
    </form>
</template>

<script>
import baseButton from "../UI/base-button.vue"
import VButton from "../UI/VButton.vue"
import VInput from "../UI/VInput.vue"

export default {
    name: "VForm",
    components: {
        VInput,
        VButton,
    },
    props: {
        formData: {
            type: Object,
            required: true,
        },
    },
}
// exampleFormData : {
//   title: 'Узнайте свободные даты и забронируйте зал',
//     inputs: [
//       { type: 'text', label: 'Ваше имя', name: "name", value: "Иван", placeholder: 'Имя' },
//       { type: 'tel', label: 'Ваш номер телефона', name: "tel", placeholder: "+7 (___) ___-__-__" }
//     ]
// }
</script>

<style lang="scss"></style>
