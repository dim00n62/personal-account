<template>
  <div class="js-dialog">
    <js-close-button
      class="js-dialog__close"
      @click.native="close"
    />
    <div class="js-dialog__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsDialog',

  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-dialog {
    position: relative;
    background-color: white;
    border-radius: 40px;
    min-height: 432px;
    display: flex;
    flex-direction: column;

    &__close {
      position: absolute;
      margin: 32px;
      top: 0;
      right: 0;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
    }
  }
</style>