<template>
  <div
    class="js-modal-container"
    :style="{ zIndex: zIndex }"
    :class="{ 'js-modal-container--empty': !modals.length }"
  >
    <component
      v-for="(modal, index) in modals"
      v-on="modal.listeners"
      :is="modal.component"
      v-bind="modal.props"
      class="js-modal-container__item"
      :class="{ 'js-modal-container__item--last': isLast(index) }"
      :key="modal.id"
      @close="handleClose(modal.id)"
      @hook:mounted="updateLastIndex"
      @hook:destroyed="updateLastIndex"
    />
  </div>
</template>

<script>
import bus from './event-bus.ts';

export default {
  name: 'JSModalContainer',
  data() {
    return {
      modals: [],
      zIndex: 0,
      lastIndex: 0
    };
  },
  beforeCreate() {
    bus.$on('change', (modals) => {
      this.modals = modals;
      ++this.zIndex;
    });
  },
  beforeDestroy() {
    bus.$off('change');
  },
  methods: {
    handleClose(id) {
      this.modalManager.close(id);
    },

    isLast(index) {
      return this.lastIndex === index;
    },

    updateLastIndex() {
      this.lastIndex = this.modals.length - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
  .js-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &__item {
      &--last {
        box-shadow: 0 0 0 10000px rgba(255, 255, 255, .5),
          0px 0px 100px rgba(155, 177, 220, 0.25);
      }
    }

    &--empty {
      display: none;
    }
  }
</style>
