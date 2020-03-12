<template>
  <div class="panel">
    <template v-if="$route.name !== 'details'">
      <div class="panel__toolbar" v-text="'Мои маркетплейсы'">
      </div>
      <div class="panel__widgets">
        <div
          v-if="isLoading"
          class="panel__loading"
        >
          <js-loading/>
        </div>
        <div
          v-else-if="!marketplaces.length"
          class="panel__placeholder"
        >
          <js-icon-button
            name="plus"
            text-placement="before"
            @click="addMarketPlace"
          >
            Добавить маркетплейс
          </js-icon-button>
        </div>
        <div
          v-else
          class="panel__grid"
        >
          <market-widget
            v-for="marketplace in marketplaces"
            :key="marketplace.tag"
            :marketplace="marketplace"
            :range="timeRange"
          />
          <div class="panel__fake-widget">
            <js-icon-button
              name="plus"
              text-placement="before"
              @click="addMarketPlace"
            >
              Добавить маркетплейс
            </js-icon-button>
          </div>
        </div>
      </div>
    </template>
    <router-view v-else/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import AddMarketPlace from '../components/AddMarketPlace';
import MarketWidget from '../components/MarketWidget';

export default {
  name: 'Panel',

  components: {
    MarketWidget
  },

  data: () => ({
    isDetailsOpen: false,
    isLoading: false
  }),

  computed: {
    ...mapGetters([
      'marketplaces',
      'timeRange'
    ]),
    isEmpty() {
      return true;
    }
  },

  async created() {
    this.isLoading = true;
    await this.fetchMarketplaces();
    this.isLoading = false;
  },

  methods: {
    ...mapActions([
      'fetchMarketplaces'
    ]),
    addMarketPlace() {
      this.modalManager.open(AddMarketPlace);
    }
  }
};
</script>

<style lang="scss" scoped>
  .panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    &__toolbar {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      padding: 32px 88px;
    }

    &__placeholder,
    &__loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 257px;
      flex: 1;
    }

    &__widgets {
      flex: 1;
      display: flex;
    }

    &__grid {
      width: 100%;
      padding: 72px 88px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 48px;
      grid-column-gap: 32px;
    }

    &__fake-widget {
      max-height: 256px;
      box-sizing: border-box;
      display: flex;
      padding-top: 64px;
    }
  }
</style>