<template>
  <div class="js-select">
    <div
      class="js-select__target"
      @click="toggle"
    >
      <div class="js-select__title" v-text="title"/>
      <div
        class="js-select__arrow"
        :class="{
          'js-select__arrow--opened': opened
        }"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8989 10.1569C15.7898 10.1569 16.236 11.234 15.606 11.864L12.3634 15.1066C11.9728 15.4971 11.3397 15.4971 10.9491 15.1066L7.7065 11.864C7.07654 11.234 7.5227 10.1569 8.41361 10.1569L14.8989 10.1569Z" fill="#1F3756"/>
        </svg>
      </div>
    </div>
    <div
      v-if="opened"
      class="js-select__menu"
    >
      <div
        v-for="(title, value) in items"
        :key="value"
        class="js-select__item"
        v-text="title"
        @click="handleItemClick(value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsSelect',

  props: {
    value: {
      type: String,
      default: ''
    },
    items: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    opened: false
  }),

  computed: {
    title() {
      return this.items[this.value] || '-';
    }
  },

  methods: {
    handleItemClick(value) {
      this.$emit('input', value);
      this.close();
    },
    toggle() {
      this.opened = !this.opened;
    },
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-select {
    display: flex;
    position: relative;

    &__title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
    }

    &__arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;

      &--opened {
        transform: rotate(180deg);
      }
    }

    &__target {
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 25px;
      padding: 8px 8px 8px 24px;
      min-width: 100px;
      cursor: pointer;
    }

    &__menu {
      position: absolute;
      width: 100%;
      top: 100%;
      margin-top: 8px;
      border-radius: 25px;
      background: white;
      padding: 16px 0;
      box-shadow: 0 5px 10px 0px;
    }

    &__item {
      padding: 4px 16px;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      cursor: pointer;

      &:hover {
        background-color: var(--main-bg-color);
        border-radius: 5px;
      }
    }
  }
</style>
