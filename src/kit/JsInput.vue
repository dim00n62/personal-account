<template>
  <div class="js-input">
    <input
      v-if="mask"
      class="js-input__native"
      :class="{
        'js-input__native--error': error
      }"
      :value="value"
      v-bind="$attrs"
      v-mask="mask"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', value)"
    />
    <input
      v-else
      class="js-input__native"
      :class="{
        'js-input__native--error': error
      }"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', value)"
    />
    <div v-if="error" class="js-input__error" v-text="error"/>
  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask';

export default {
  name: 'JsInput',

  directives: {
    mask: VueMaskDirective
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    mask: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-input {
    position: relative;

    &__native {
      border: none;
      border-radius: 33px;
      background-color: var(--main-bg-color);
      padding: 8px 40px;
      font-size: 18px;
      line-height: 40px;
      height: 56px;
      width: 472px;
      outline: none;
      color: var(--main-text-color);
      margin-bottom: 16px;
      font-weight: bold;

      &--error {
        box-shadow: 0 0 0 1px var(--red-text-color) inset;
      }
    }

    &__error {
      color: var(--red-text-color);
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: 12px;
    }
  }
</style>