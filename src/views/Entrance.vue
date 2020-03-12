<template>
  <div class="entrance">
    <div class="entrance__image">
      <img alt="Business People" src="../assets/business-people.svg">
    </div>
    <div class="entrance__form">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Entrance',

  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style lang="scss" scoped>
  .entrance {
    display: flex;
    height: 100%;
    width: 100%;

    &__image {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--main-bg-color);
      overflow: hidden;
    }

    &__form {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--main-text-color);
      overflow: scroll;
    }
  }
</style>
