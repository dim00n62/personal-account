<template>
  <button
    class="js-button"
    v-bind="$attrs"
    v-on="$listeners"
  ><slot/></button>
</template>

<script>
export default {
  name: 'JsButton'
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

    &:hover {
      background-color: darken($button-bg, 10%);
    }

    &:active {
      background-color: darken($button-bg, 15%);
    }
  }
</style>