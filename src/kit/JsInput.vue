<template>
  <input
    class="js-input"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'JsInput'
};
</script>

<style lang="scss" scoped>
  .js-input {
    border: none;
    border-radius: 33px;
    background-color: var(--main-bg-color);
    padding: 8px 40px;
    font-size: 18px;
    line-height: 40px;
    height: 40px;
    width: 472px;
    outline: none;
    color: var(--main-text-color);
    margin-bottom: 16px;
    font-weight: bold;
  }
</style>