<template>
  <section class='schemes' id="Схемы залов">
    <div class="container">
      <div class="schemes__body">
        <h5 class="schemes__title"></h5>
        <div class="schemes__tabs">
          <TabsUIFC :tabs="tabs"
            @onShowDialog="$emit('onShowDialog')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabsUIFC from '../UI-FC/TabsUIFC.vue';

export default {
  name: "schemes",
  components: { TabsUIFC },
  data() {
    return {
      tabs: [
        {
          name: "firstHall",
          buttonText: 'Зал Первый',
          tabData: {
            title: 'Просторный зал с панорамным видом на город',
            list: [
              { key: 'площадь', value: '160 кв. метров' },
              { key: 'вместимость', value: 'до 100 человек' },
              { key: 'фуршет', value: 'до 200 человек' },
            ]
          }
        },
        {
          name: "secondHall",
          buttonText: 'Зал Второй',
          tabData: {
            title: 'Заголовог второго зала',
            list: [
              { key: 'площадь', value: '100 кв. метров' },
              { key: 'вместимость', value: 'до 80 человек' },
              { key: 'фуршет', value: 'до 160 человек' },
            ]
          }
        },
      ]
    }
  }
}
</script>

<style lang='scss'></style>
