<template>
  <div class="home">
    <div class="home__left-panel">
      <div class="home__logo">
        <img alt="JStick" src="../assets/logo.svg"/>
      </div>
      <nav class="home__nav">
        <js-menu-item
          v-for="item in items"
          :key="item"
          :name="item"
          :active="$route.name === item"
          class="home__menu-item"
        >
          {{ texts[item] }}
        </js-menu-item>
      </nav>
      <div class="home__footer">
        <js-icon-button name="support"/>
      </div>
    </div>
    <div class="home__right-panel">
      <js-header/>
    </div>
  </div>
</template>

<script>
import JsHeader from './JsHeader';

export default {
  name: 'Home',

  components: {
    JsHeader
  },

  data: () => ({
    items: [
      'home',
      'colleagues',
      'plan',
      'recommendation',
      'settings'
    ],
    texts: {
      home: 'Главная',
      colleagues: 'Сотрудники',
      plan: 'План',
      recommendation: 'Рекомендации',
      settings: 'Настройки'
    }
  })
};
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    display: flex;

    &__menu-item:not(:last-child) {
      margin-bottom: 32px;
    }

    &__left-panel {
      width: 352px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &__logo {
      padding: 80px 88px;
    }

    &__nav {
      flex: 1;
      padding: 0 48px;
    }

    &__footer {
      padding: 80px 50px;
    }

    &__right-panel {
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      flex: 1;
      height: 100%;
      background-color: var(--main-bg-color);
    }
  }
</style>
