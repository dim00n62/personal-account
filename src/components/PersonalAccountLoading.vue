<template>
  <js-dialog @close="close">
    <div class="persona-account-loading">
      <h1 v-if="title" v-text="title"/>
      <h2 v-if="message" v-text="message"/>

      <js-loading/>
    </div>
  </js-dialog>
</template>

<script>
export default {
  name: 'PersonalAccountLoading',

  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },

  mounted() {
    // TODO
    setTimeout(() => {
      this.$router.push({ name: 'home' });
      this.close();
    }, 2000);
  },

  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
  .persona-account-loading {
    width: 576px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      color: var(--green-text-color);
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
      margin-bottom: 32px;
    }

    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 40px;
    }
  }
</style>