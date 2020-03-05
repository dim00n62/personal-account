<template>
  <div
    class="js-menu-item"
    @click="handleClick"
  >
    <div class="js-menu-item__icon">
      <img :src="require(`@/assets/icons/${name}${active ? '--active' : ''}.svg`)" alt="Icon">
    </div>
    <div class="js-menu-item__title"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'JsMenuItem',

  props: {
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick() {
      this.$router.push({ name: this.name });
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-menu-item {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__icon {
      height: 48px;
    }

    &__title {
      font-weight: bold;
      font-size: 20px;
      line-height: 48px;
      margin-left: 32px;
    }
  }
</style>
