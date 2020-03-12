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
          :active="isActive(item)"
          class="home__menu-item"
        >
          {{ texts[item] }}
        </js-menu-item>
      </nav>
      <div class="home__footer">
        <js-menu-item name="support">Помощь</js-menu-item>
      </div>
    </div>
    <div class="home__right-panel">
      <js-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import JsHeader from '../components/JsHeader';
import { mapGetters } from 'vuex';

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
  }),

  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },

  methods: {
    isActive(name) {
      return this.$route.matched.some((route) => route.name === name);
    }
  }
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
      overflow: scroll;
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
      display: flex;
      flex-direction: column;
    }
  }
</style>
