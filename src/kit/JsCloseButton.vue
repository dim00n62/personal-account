<template>
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="js-close-button">
    <rect x="14.6758" y="13" width="29.222" height="2.36935" rx="1.18468" transform="rotate(45 14.6758 13)" fill="#C8CBD1"/>
    <rect x="13" y="33.6632" width="29.222" height="2.36935" rx="1.18468" transform="rotate(-45 13 33.6632)" fill="#C8CBD1"/>
  </svg>
</template>

<script>
export default {
  name: 'JsCloseButton'
};
</script>

<style lang="scss" scoped>
  .js-close-button {
    cursor: pointer;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>