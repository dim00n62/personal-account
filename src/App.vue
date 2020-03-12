<template>
  <div id="app">
    <router-view/>
    <js-modal-container/>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';

import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },

  async created() {
    await this.checkLogin();

    if (this.loggedIn) {

      const routeName = this.$route.name === 'Login' || this.$route.name === 'Register'
        ? 'home'
        : this.$route.name as string;
      this.$router.push({ name: routeName });
    } else {
      this.$router.push({ name: 'Login' });
    }
  },

  methods: {
    ...mapActions([
      'checkLogin'
    ])
  }
});
</script>

<style lang="scss">
#app {
  // TODO need load font
  font-family: Gilroy, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;


  --main-bg-color: #F6F6F9;
  --main-text-color: #2c3e50;
  --secondary-text-color: #BDC8DA;
  --green-text-color: #177D83;
  --red-text-color: #EB5757;
  --vinous-text-color: #AD1313;
  --main-link-color: #13449F;
  --green-text-color: #43B4AA;
  --disabled-text-color: #C8CBD1;
}

* {
  box-sizing: border-box;
}

img {
  display: block;
}

body {
  margin: 0;
}
</style>
