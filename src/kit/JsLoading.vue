<template>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" class="js-loading">
    <circle cx="32" cy="32" r="27" stroke="#F5F6FA" stroke-width="10"/>
    <path d="M33 59C47.3594 59 59 46.9117 59 32C59 17.0883 47.3594 5 33 5" stroke="url(#paint0_linear)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="33" y1="5" x2="11.9631" y2="43.2399" gradientUnits="userSpaceOnUse">
        <stop stop-color="#43B4AA"/>
        <stop offset="1" stop-color="#43B4AA" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'JsLoading'
};
</script>

<style lang="scss" scoped>
  .js-loading {
    -webkit-animation:spin 1s linear infinite;
    -moz-animation:spin 1s linear infinite;
    animation:spin 1s linear infinite;

    @-moz-keyframes spin { 100% { -moz-transform: rotate(-360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(-360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }
  }
</style>