<template>
  <div id="app">
    <router-view/>
    <js-modal-container/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App'
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
  --green-text-color: #43B4AA;
  --disabled-text-color: #C8CBD1;
}

img {
  display: block;
}

body {
  margin: 0;
}
</style>
