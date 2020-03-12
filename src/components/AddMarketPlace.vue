<template>
  <js-dialog @close="close">
    <div class="add-market-place">
      <div class="add-market-place__header">
        Выберите маркетплейс
      </div>
      <div class="add-market-place__content">
        <js-button
          v-for="(title, value) in markets"
          :key="value"
          type="secondary"
          style="width: 440px;"
          @click="handleMarketClick(value)"
        >
          {{ title }}
        </js-button>
        <h1>В данный момент мы работаем только с Wildberries.</h1>
      </div>
    </div>
  </js-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddMarketPlace',

  data: () => ({
    markets: {
      wildberries: 'Wildberries'
    }
  }),

  methods: {
    ...mapActions([
      'addMarket'
    ]),
    handleMarketClick(market) {
      this.addMarket(market);

      this.close();
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
  .add-market-place {
    width: 800px;
    height: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: stretch;

    &__header {
      position: absolute;
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
      padding: 56px 72px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    h1 {
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
      margin-top: 112px;
      color: var(--secondary-text-color);
      margin-bottom: 0;
    }
  }
</style>