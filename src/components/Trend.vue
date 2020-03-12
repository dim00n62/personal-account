<template>
  <div
    class="trend"
    :class="{
      'trend--negative': negative
    }"
  >
    <js-arrow :color="negative ? '#EB5757' : '#177D83'"/>
    {{ negative ? '-' : '+' }}{{ percentage }}%
    <div class="trend__value">
      {{ beautifyCurrency(value) }}
    </div>
  </div>
</template>

<script>
import beautifyCurrency from '../utils/beautifyCurrency.ts';

export default {
  name: 'Trend',

  props: {
    negative: {
      type: Boolean,
      default: false
    },
    percentage: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },

  methods: {
    beautifyCurrency
  }
};
</script>

<style lang="scss" scoped>
  .trend {
    display: flex;
    align-items: center;
    color: var(--green-text-color);
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;

    &--negative {
      color: var(--red-text-color);
      .trend__arrow {
        transform: rotate(180deg);
      }
    }

    &__value {
      margin-left: 16px;
    }
  }
</style>
