<template>
  <div class="js-header">
    <div class="js-header__content">
      <js-select
        :value="timeRange"
        :items="items"
        @input="handlePeriodChange"
      />
    </div>
    <div class="js-header__aside">
      <js-notification-icon
        class="js-header__notification"
        :empty="false"
      />
      <div class="js-header__name">{{ userName }}</div>
      <div class="js-header__user-image">
        <img
          src="@/assets/user.svg"
          :alt="userName"
          @click="showLogout = !showLogout"
        />
        <div
          v-if="showLogout"
          class="js-header__logout-tooltip"
        >
          <div @click="handleLogout">Logout</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { TimeRange } from '@/types/TimeRange';
import JsNotificationIcon from '../components/JsNotificationIcon';

export default {
  name: 'JsHeader',

  components: {
    JsNotificationIcon,
  },

  data: () => ({
    items: {
      [TimeRange.Week]: '2 weeks',
      [TimeRange.Month]: 'Month',
      [TimeRange.Year]: 'Year'
    },

    showLogout: false
  }),

  computed: {
    ...mapGetters([
      'userName',
      'timeRange'
    ])
  },

  methods: {
    ...mapActions([
      'setRange',
      'logout'
    ]),
    handlePeriodChange(value) {
      this.setRange(value);
    },
    async handleLogout() {
      await this.logout();
      this.$router.push({ name: 'Login' });
    }
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

    &__user-image {
      cursor: pointer;
      position: relative;
    }

    &__logout-tooltip {
      position: absolute;
      margin-top: 16px;
      padding: 10px;
      background-color: #fff;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
        background-color: #CCCCCC;
      }
    }
  }
</style>