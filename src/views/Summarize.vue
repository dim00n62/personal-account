<template>
  <div class="summarize">
    <div class="summarize__fraction">
      <div class="summarize__title" v-text="'Weeks cover'"/>
      <div class="summarize__text-l mt-8" v-text="'14'"/>
    </div>
    <div class="summarize__fraction">
      <div class="summarize__title" v-text="'ASP'"/>
      <div class="summarize__text-l mt-8" v-text="'10 000 ₽'"/>
    </div>
    <div class="summarize__fraction">
      <div class="summarize__title" v-text="'Выкуп'"/>
      <div class="summarize__text-l mt-8" v-text="'46%'"/>
    </div>
    <div class="summarize__fraction">
      <div class="summarize__title" v-text="'Оборачиваемость'"/>
      <div class="summarize__flex-container mt-8">
        <div class="summarize__text-l mr-8" v-text="'17'"/>
        <div class="summarize__text-m" v-text="'дней'"/>
      </div>
    </div>
    <div class="summarize__fraction">
      <div class="summarize__title" v-text="'Нулевые SKU'"/>
      <div class="summarize__flex-container mt-8">
        <div class="summarize__text-l mr-8" v-text="'46%'"/>
        <div class="summarize__text-m" v-text="'топовые'"/>
      </div>
    </div>
    <div class="summarize__fraction summarize__flex-container mt-8">
      <div class="summarize__text-l mr-8" v-text="'50%'"/>
      <div class="summarize__text-m" v-text="'остальные'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summarize'
};
</script>

<style lang="scss" scoped>
  .summarize {
    grid-area: summary;
    background-color: white;
    border-radius: 25px;
    padding: 44px 56px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    &__title {
      display: flex;
      align-items: center;
      color: var(--secondary-text-color);
      font-weight: bold;
      font-size: 18px;
    }

    &__fraction {
      padding: 8px;
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

    &__flex-container {
      display: flex;
      align-items: center;
    }

    .mt-8 {
      margin-top: 8px;
    }

    .mr-8 {
      margin-right: 8px;
    }
  }
</style>