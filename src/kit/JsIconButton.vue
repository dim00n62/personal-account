<template>
  <div
    class="js-icon-button"
    v-on="$listeners"
  >
    <div
      v-if="textPlacement === 'before'"
      class="js-icon-button__text"
      :style="{
        marginRight: '40px'
      }"
    >
      <slot/>
    </div>
    <img
      class="js-icon-button__icon"
      :src="require(`@/assets/icons/${name}.svg`)"
      :alt="name"
    />
    <div
      v-if="textPlacement === 'after'"
      class="js-icon-button__text"
      :style="{
        marginLeft: '40px'
      }"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsIconButton',

  props: {
    name: {
      type: String,
      required: true
    },
    textPlacement: {
      type: String,
      default: 'after'
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-icon-button {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__icon {
      background-color: var(--main-link-color);
      border-radius: 50px;
      padding: 16px;
    }

    &__text {
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
    }
  }
</style>