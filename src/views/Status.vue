<template>
  <div class="status">
    <div class="status__title">
      Статус
    </div>
    <div class="status__flex-container">
      <div class="status__no-data" v-text="'Нет данных! '"/>
      <div class="status__upload-data" v-text="'Загрузить данные'"/>
    </div>
    <js-red-dot class="status__dot"/>
  </div>
</template>

<script>
export default {
  name: 'Status'
};
</script>

<style lang="scss" scoped>
  .status {
    grid-area: status;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 25px;
    padding: 24px 56px;
    height: 200px;

    &__title {
      color: var(--secondary-text-color);
      font-weight: bold;
      font-size: 18px;
    }

    &__flex-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    &__no-data {
      color: var(--vinous-text-color);
      font-weight: bold;
      font-size: 18px;
    }

    &__upload-data {
      color: var(--main-link-color);
      font-weight: bold;
      font-size: 18px;
      margin-top: 16px;
    }

    &__dot {
      position: absolute;
      top: 24px;
      right: 32px;
    }
  }
</style>