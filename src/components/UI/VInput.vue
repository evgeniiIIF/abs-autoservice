<!-- <VInput :opts="{ label: 'label', type: 'text', value: 'Mersedes', name: 'auto', placeholder: 'Введите данные автомобиля' }" /> -->
<!-- or -->
<!-- inputOpts: {
    textarea: true,
    cols: 30,
    rows: 5,
    label: "Комментарий",
    type: "textarea",
    name: "problem",
    placeholder: "Опишите проблему",
}, -->
<template>
    <label class="input">
        <span class="input__label">{{ opts.label }}</span>
        <input
            v-if="!opts.textarea"
            class="input__input"
            :type="opts.type"
            :name="opts.name"
            :value="opts.value"
            :placeholder="opts.placeholder"
        />
        <textarea
            v-else
            class="input__input"
            :type="opts.type"
            :name="opts.name"
            :value="opts.value"
            :cols="opts.cols"
            :rows="opts.rows"
            :placeholder="opts.placeholder"
        ></textarea>
    </label>
</template>

<script>
export default {
    name: "VInput",
    props: {
        opts: {
            type: Object,
        },
    },
}
</script>

<style lang="scss">
.input {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__label {
        margin-bottom: 5px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: #999999;
    }

    &__input {
        padding: 12px 16px;
        outline: none;
        border: none;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        color: #ffffff;

        border-radius: 4px;
        background: #717171;

        &::placeholder {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #cbcccc;
        }
    }
}
</style>
