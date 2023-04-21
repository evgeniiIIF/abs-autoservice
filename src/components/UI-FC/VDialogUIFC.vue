<template>
  <div class='v-dialog' v-if="showDialog" @click="onHideDialog">
    <div class="v-dialog__background"></div>
    <div class="v-dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VDialogUIFC',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onHideDialog() {
      this.$emit('onHideDialog');
    }
  }
}
</script>


<style lang='scss'>
.v-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;

  &__background {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.9;
    background: #18191B;

  }

  &__content {
    position: relative;
    margin: auto;
  }
}
</style>