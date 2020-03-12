<template>
  <div
    class="js-step"
    :class="{ 'js-step--active': active }"
  >
    <div class="js-step__number">
      {{ number }}
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'JsStep',

  props: {
    number: {
      type: Number,
      default: 1
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-step {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: var(--disabled-text-color);
    cursor: pointer;

    &__number {
      border-radius: 100%;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 24px;
      margin-right: 16px;
      background-color: var(--main-bg-color);
    }

    &--active {
      color: var(--main-text-color);
    }
  }
</style>