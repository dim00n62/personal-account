<template>
  <div class="details">
    <div class="details__title">
      <img
        class="details__back"
        src="@/assets/icons/left-arrow.svg"
        @click="goBack"
      />
      {{ marketplace.title }}
    </div>
    <dynamic/>
    <graph/>
    <summarize/>
    <status/>
  </div>
</template>

<script>
import Graph from './Graph';
import Dynamic from './Dynamic';
import Summarize from './Summarize';
import Status from './Status';

export default {
  name: 'Details',

  components: {
    Graph,
    Dynamic,
    Summarize,
    Status
  },

  computed: {
    marketplace() {
      return this.$route.params.marketplace;
    }
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style lang="scss" scoped>
  .details {
    display: grid;
    grid-template-areas:
      "title title title"
      "dynamic dynamic summary"
      "dynamic dynamic summary"
      "graph   graph   status";
    grid-row-gap: 32px;
    grid-column-gap: 40px;
    padding: 0 88px;

    &__title {
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      display: flex;
    }

    &__back {
      cursor: pointer;
      margin-right: 24px;
    }
  }
</style>
