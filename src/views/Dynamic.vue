<template>
  <div class="dynamic">
    <div class="dynamic__chart">
      <div class="dynamic__title" v-text="'Динамика продаж'"/>
      <div class="dynamic__round">
        <div class="dynamic__text-l">
          <js-arrow
            class="dynamic__arrow"
            :color="negative ? '#EB5757' : '#177D83'"
          />
          92%
        </div>
        <div class="dynamic__text-m mt-8">
          2 464 ₽
        </div>
      </div>
    </div>
    <div class="dynamic__summary">
      <div>
        <div class="dynamic__title" v-text="'Доход'"/>
        <div class="dynamic__text-l mt-8">
          14 312 837 ₽
        </div>
        <trend
          class="dynamic__trend"
          :value="865456"
          :percentage="36"
        />
      </div>

      <div class="dynamic__flex-container">
        <div>
          <div class="dynamic__title" v-text="'Комиссия'"/>
          <div class="dynamic__text-m mt-8">
            25%  (24 873 ₽)
          </div>
        </div>
        <div>
          <div class="dynamic__title" v-text="'Итого'"/>
          <div class="dynamic__text-m mt-8">
            899 000 ₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trend from '@/components/Trend';

export default {
  name: 'Dynamic',

  components: {
    Trend
  },

  data: () => ({
    negative: false
  })
};
</script>

<style lang="scss" scoped>
  .dynamic {
    grid-area: dynamic;
    background-color: white;
    border-radius: 25px;
    padding: 48px 104px 84px 36px;

    display: flex;

    height: 408px;

    &__chart {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &__summary {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      color: var(--secondary-text-color);
      font-weight: bold;
      font-size: 18px;
    }

    &__round {
      margin-top: 36px;
      background-color: #A8FFD0;
      height: 220px;
      width: 220px;
      border-radius: 100%;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &--nagative {
        background-color: var(--red-text-color);
      }
    }

    &__text-l {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
    }

    &__text-m {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
    }

    &__arrow {
      margin-right: 8px;
    }

    &__trend {
      margin-top: 8px;
    }

    &__flex-container {
      display: flex;
      justify-content: space-between;
    }

    .mt-8 {
      margin-top: 8px;
    }
  }
</style>