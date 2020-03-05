<template>
  <img
    class="js-icon-button"
    :src="require(`@/assets/icons/${name}.svg`)"
    :alt="name"
  />
</template>

<script>
export default {
  name: 'JsIconButton',

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-icon-button {
    cursor: pointer;
  }
</style>