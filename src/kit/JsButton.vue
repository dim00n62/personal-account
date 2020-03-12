<template>
  <button
    class="js-button"
    :class="{
      [`js-button--${type}`]: type
    }"
    v-bind="$attrs"
    v-on="$listeners"
  ><slot/></button>
</template>

<script>
export default {
  name: 'JsButton',

  props: {
    type: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-button {
    $button-bg: #13449F;

    border-radius: 40px;
    border: none;
    padding: 16px 40px;
    outline: none;
    cursor: pointer;
    background-color: $button-bg;
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
    color: white;

    &:disabled {
      background-color: grey;
      cursor: default;
    }

    &:hover:not(:disabled) {
      background-color: darken($button-bg, 10%);
    }

    &:active:not(:disabled) {
      background-color: darken($button-bg, 15%);
    }

    &--secondary {
      $button-bg: #F5F6FA;
      background-color: $button-bg;
      color: var(--main-text-color);

      &:hover:not(:disabled) {
        background-color: darken($button-bg, 10%);
      }

      &:active:not(:disabled) {
        background-color: darken($button-bg, 15%);
      }
    }
  }
</style>