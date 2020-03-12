<template>
  <div class="market-widget">
    <div
      class="market-widget__title"
      v-text="marketplace.title"
    />
    <div
      class="market-widget__widget"
      @click="handleWidgetClick"
    >
      <div
        v-if="marketplace.isEmpty"
        class="market-widget__empty"
      >
        Нет данных
        <js-red-dot class="market-widget__empty-dot"/>

      </div>
      <template v-else>
        <div class="market-widget__header">
          Комиссия {{ marketplace.comissionPercentage }}%
        </div>
        <div class="market-widget__revenue">
          {{ revenue }}
        </div>
        <trend
          class="market-widget__trend"
          :value="marketplace.currentTrend.value"
          :percentage="marketplace.currentTrend.percentage"
          :negative="!marketplace.isPositiveDynamic"
        />
        <div
          class="market-widget__help"
        >
          MTD
          <svg width="6" height="10" viewBox="0 0 6 10">
            <path
              d="M2.0111 6.91532C2.0111 6.28808 2.08657 5.78853 2.23751 5.41667C2.38846 5.0448 2.66371 4.67966 3.06326 4.32124C3.46726 3.95833 3.73585 3.66487 3.86903 3.44086C4.00222 3.21237 4.06881 2.97267 4.06881 2.72177C4.06881 1.96461 3.72253 1.58602 3.02997 1.58602C2.70144 1.58602 2.43729 1.68907 2.23751 1.89516C2.04218 2.09677 1.94007 2.37679 1.93119 2.73522H0C0.00887902 1.87948 0.281909 1.20968 0.81909 0.725806C1.36071 0.241935 2.09767 0 3.02997 0C3.97114 0 4.70144 0.230735 5.22087 0.692204C5.74029 1.14919 6 1.79659 6 2.63441C6 3.01523 5.91565 3.3759 5.74695 3.7164C5.57825 4.05242 5.28302 4.42652 4.86127 4.83871L4.32186 5.35618C3.98446 5.68324 3.79134 6.06631 3.74251 6.50538L3.71587 6.91532H2.0111ZM1.81798 8.97849C1.81798 8.67832 1.91787 8.4319 2.11765 8.23925C2.32186 8.04212 2.58158 7.94355 2.89678 7.94355C3.21199 7.94355 3.46948 8.04212 3.66926 8.23925C3.87347 8.4319 3.97558 8.67832 3.97558 8.97849C3.97558 9.27419 3.87569 9.51837 3.67592 9.71102C3.48058 9.90367 3.22087 10 2.89678 10C2.5727 10 2.31077 9.90367 2.11099 9.71102C1.91565 9.51837 1.81798 9.27419 1.81798 8.97849Z"
              fill="#BDC8DA"
            />
          </svg>

        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { TimeRange } from '@/types/TimeRange';
import beautifyCurrency from '../utils/beautifyCurrency.ts';
import Trend from './Trend';

export default {
  name: 'MarketWidget',

  components: {
    Trend
  },

  props: {
    marketplace: {
      type: Object,
      required: true
    },
    range: {
      type: String,
      default: TimeRange.Month
    }
  },

  computed: {
    revenue() {
      switch (this.range) {
        case TimeRange.Week:
          return beautifyCurrency(this.marketplace.weekRevenue);
        case TimeRange.Month:
          return beautifyCurrency(this.marketplace.monthRevenue);
        case TimeRange.Year:
          return beautifyCurrency(this.marketplace.yearRevenue);
        default:
          return beautifyCurrency(0);
      }
    }
  },

  methods: {
    handleWidgetClick() {
      this.$router.push({
        name: 'details',
        params: { marketplace: this.marketplace }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .market-widget {
    &__title {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 40px;
    }

    &__widget {
      background-color: white;
      border-radius: 25px;
      height: 192px;
      padding-left: 48px;
      padding-right: 32px;
      position: relative;

      &:hover::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, .5);
        cursor: pointer;
        z-index: 1;
      }
    }

    &__empty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--red-text-color);
      font-weight: bold;
      font-size: 18px;
    }

    &__empty-dot {
      position: absolute;
      top: 24px;
      right: 24px;
    }

    &__header {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: var(--secondary-text-color);
      padding: 32px 32px 18px 0;
    }

    &__revenue {
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
    }

    &__trend {
      margin-top: 8px;
    }

    &__help {
      color: var(--secondary-text-color);
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: end;
      cursor: pointer;
    }
  }
</style>
