<template>
  <div class="js-header">
    <div class="js-header__content">
      <js-select
        v-model="range"
        :items="items"
      />
    </div>
    <div class="js-header__aside">
      <js-notification-icon
        class="js-header__notification"
        :empty="false"
      />
      <div class="js-header__name">{{ userName }}</div>
      <img src="@/assets/user.svg" :alt="userName"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JsNotificationIcon from '../components/JsNotificationIcon';

export default {
  name: 'JsHeader',

  components: {
    JsNotificationIcon
  },

  data: () => ({
    range: 'month',
    items: {
      year: 'Year',
      month: 'Month',
      week: 'Week',
      day: 'Day'
    }
  }),

  computed: {
    ...mapGetters([
      'userName'
    ])
  }
};
</script>

<style lang="scss" scoped>
  .js-header {
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__content {
      flex: 1;
      padding-left: 88px;
      display: flex;
    }

    &__aside {
      padding: 0 50px;
      display: flex;
      align-items: center;
    }

    &__name {
      font-weight: bold;
      font-size: 20px;
      margin-right: 16px;
    }

    &__notification {
      margin-right: 16px;
    }
  }
</style>